const RESET = '\x1b[0m'
const BOLD = '\x1b[1m'
const DIM = '\x1b[2m'
const GREEN = '\x1b[32m'
const CYAN = '\x1b[36m'
const YELLOW = '\x1b[33m'
const BLUE = '\x1b[34m'
const MAGENTA = '\x1b[35m'
const RED = '\x1b[31m'

export const colors = {
  reset: RESET,
  bold: BOLD,
  dim: DIM,
  green: GREEN,
  cyan: CYAN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: MAGENTA,
  red: RED,
}

export function header(text: string): string {
  const line = '─'.repeat(Math.min(text.length + 4, 60))
  return `${GREEN}┌${line}┐${RESET}\n${GREEN}│${RESET} ${BOLD}${text}${RESET}${' '.repeat(Math.max(0, 60 - text.length - 4))}${GREEN}│${RESET}\n${GREEN}└${line}┘${RESET}`
}

export function table(
  rows: string[][],
  options?: { headerRow?: boolean; colColors?: number[] },
): string {
  if (rows.length === 0) return ''
  const colWidths = rows[0].map((_, ci) =>
    Math.max(...rows.map((r) => (r[ci] ? stripAnsi(r[ci]).length : 0))),
  )
  const result: string[] = []

  const renderRow = (row: string[], isHeader?: boolean) => {
    const cells = row.map((cell, ci) => {
      const pad = colWidths[ci] - stripAnsi(cell).length
      const padded = cell + ' '.repeat(pad)
      return isHeader ? `${BOLD}${padded}${RESET}` : padded
    })
    return `  ${cells.join('  ')}`
  }

  if (options?.headerRow && rows.length > 0) {
    result.push(renderRow(rows[0], true))
    result.push(
      `  ${colWidths.map((w) => DIM + '─'.repeat(w) + RESET).join('  ')}`,
    )
    for (let i = 1; i < rows.length; i++) {
      result.push(renderRow(rows[i]))
    }
  } else {
    for (const row of rows) {
      result.push(renderRow(row))
    }
  }

  return result.join('\n')
}

export function stripAnsi(str: string): string {
  return str.replace(/\x1b\[[0-9;]*m/g, '')
}

export function dim(text: string): string {
  return `${DIM}${text}${RESET}`
}

export function bold(text: string): string {
  return `${BOLD}${text}${RESET}`
}

export function green(text: string): string {
  return `${GREEN}${text}${RESET}`
}

export function cyan(text: string): string {
  return `${CYAN}${text}${RESET}`
}

export function yellow(text: string): string {
  return `${YELLOW}${text}${RESET}`
}
