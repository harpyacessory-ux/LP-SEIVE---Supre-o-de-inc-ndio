/**
 * CONTRATO DE CONTEÚDO DE SEÇÃO — validador compartilhado.
 *
 * Extraído do `check-lp.mjs` para ter **dois** consumidores:
 *
 *   1. `check-lp.mjs`  → valida `src/data/sections/<slug>.ts` depois de composto;
 *   2. `ficha.mjs`     → valida a ficha de execução **antes** de escrever qualquer código.
 *
 * É o que faz a ficha valer: se o bloco de uma seção passa aqui, o arquivo de dados
 * gerado a partir dele passa no `check:lp`. Errar na ficha custa uma correção no
 * documento; errar depois custa a página montada e recomposta.
 *
 * `fail` e `warn` entram por parâmetro porque cada consumidor reporta do seu jeito:
 * o `check:lp` acumula por arquivo, a ficha acumula por bloco do documento.
 */

/**
 * Valida um objeto de conteúdo contra o `contract` do manifesto da seção.
 *
 * @param {string} file rótulo de origem (caminho do arquivo ou do bloco da ficha)
 * @param {{ slug: string, contract?: object }} section manifesto da seção
 * @param {Record<string, unknown>} content o conteúdo a validar
 * @param {{ fail: (file: string, msg: string) => void, warn: (file: string, msg: string) => void }} report
 */
export function checkContract(file, section, content, { fail, warn }) {
  const c = section.contract ?? {}
  const label = `${section.slug}`

  const items = c.itemsPath ? content[c.itemsPath] : null
  if (c.itemsPath && !Array.isArray(items)) {
    fail(file, `${label}: "${c.itemsPath}" deveria ser uma lista`)
    return
  }

  if (items) {
    if (c.itemsMin != null && items.length < c.itemsMin)
      fail(file, `${label}.${c.itemsPath}: ${items.length} item(ns); mínimo ${c.itemsMin}`)
    if (c.itemsMax != null && items.length > c.itemsMax)
      fail(file, `${label}.${c.itemsPath}: ${items.length} itens; máximo ${c.itemsMax}`)

    const ids = items.map((i) => i?.id).filter(Boolean)
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
    if (dupes.length) fail(file, `${label}: id repetido em ${c.itemsPath}: ${dupes.join(', ')}`)

    for (const [i, item] of items.entries()) {
      const at = `${label}.${c.itemsPath}[${i}]`
      for (const field of c.requiredItemFields ?? [])
        if (item?.[field] === undefined) fail(file, `${at}: falta "${field}"`)

      for (const [field, expected] of Object.entries(c.itemArrays ?? {})) {
        const arr = item?.[field]
        if (!Array.isArray(arr) || arr.length !== expected)
          fail(file, `${at}.${field}: esperados ${expected} itens, encontrados ${arr?.length ?? 0}`)
      }

      if (c.cellsMatchColumns && Array.isArray(item?.cells)) {
        const columns = content[c.columnsPath ?? 'columns']?.length
        if (item.cells.length !== columns)
          fail(file, `${at}.cells: ${item.cells.length} célula(s) para ${columns} coluna(s)`)
      }

      for (const [path, suffix] of Object.entries(c.endsWith ?? {})) {
        const field = path.replace('item.', '')
        const val = item?.[field]
        if (typeof val === 'string' && !val.trimEnd().endsWith(suffix))
          fail(file, `${at}.${field}: deveria terminar com "${suffix}"`)
      }
    }

    for (const field of c.exactlyOneTrue ?? []) {
      const n = items.filter((i) => i?.[field] === true).length
      if (n !== 1) fail(file, `${label}: exatamente 1 item com ${field}: true (há ${n})`)
    }
    for (const field of c.atMostOneTrue ?? []) {
      const n = items.filter((i) => i?.[field] === true).length
      if (n > 1) fail(file, `${label}: no máximo 1 item com ${field}: true (há ${n})`)
    }
    if (c.lastItemId && items.at(-1)?.id !== c.lastItemId)
      fail(
        file,
        `${label}: o último item de ${c.itemsPath} deve ter id "${c.lastItemId}" ` +
          `(rota de fuga para contato), está "${items.at(-1)?.id}"`,
      )
  }

  if (c.columnsPath) {
    const columns = content[c.columnsPath]
    if (!Array.isArray(columns)) fail(file, `${label}: "${c.columnsPath}" deveria ser uma lista`)
    else {
      if (c.columnsMin != null && columns.length < c.columnsMin)
        fail(file, `${label}.${c.columnsPath}: ${columns.length} coluna(s); mínimo ${c.columnsMin}`)
      if (c.columnsMax != null && columns.length > c.columnsMax)
        fail(file, `${label}.${c.columnsPath}: ${columns.length} colunas; máximo ${c.columnsMax}`)
    }
  }

  for (const [path, range] of Object.entries(c.alsoCount ?? {})) {
    const arr = content[path]
    if (!Array.isArray(arr)) fail(file, `${label}: "${path}" deveria ser uma lista`)
    else if (arr.length < range[0] || arr.length > range[1])
      fail(
        file,
        `${label}.${path}: ${arr.length} item(ns); esperado entre ${range[0]} e ${range[1]}`,
      )
  }

  // Limites de tamanho: aviso, não erro — copy é decisão editorial.
  for (const [path, max] of Object.entries(c.maxLength ?? {})) {
    if (path.startsWith('item.')) {
      const field = path.slice(5)
      for (const [i, item] of (items ?? []).entries()) {
        const val = item?.[field]
        if (typeof val === 'string' && val.length > max)
          warn(
            file,
            `${label}.${c.itemsPath}[${i}].${field} com ${val.length} caracteres ` +
              `(ideal ≤ ${max}): "${val.slice(0, 40)}…"`,
          )
      }
    } else {
      const val = content[path]
      if (typeof val === 'string' && val.length > max)
        warn(file, `${label}.${path} com ${val.length} caracteres (ideal ≤ ${max})`)
    }
  }
}

/**
 * Todo valor de campo `icon` precisa existir no catálogo de `icons.ts`.
 *
 * @param {string} file rótulo de origem
 * @param {unknown} node conteúdo a varrer
 * @param {Set<string>} iconNames nomes válidos
 * @param {{ fail: (file: string, msg: string) => void }} report
 * @param {string} path caminho acumulado, para a mensagem
 */
export function checkIcons(file, node, iconNames, { fail }, path = '') {
  if (Array.isArray(node)) {
    node.forEach((item, i) => checkIcons(file, item, iconNames, { fail }, `${path}[${i}]`))
    return
  }
  if (!node || typeof node !== 'object') return

  for (const [key, val] of Object.entries(node)) {
    const at = path ? `${path}.${key}` : key
    if ((key === 'icon' || key.endsWith('Icon')) && typeof val === 'string') {
      if (!iconNames.has(val)) fail(file, `ícone "${val}" (em ${at}) não existe em icons.ts`)
    } else if (val && typeof val === 'object') {
      checkIcons(file, val, iconNames, { fail }, at)
    }
  }
}
