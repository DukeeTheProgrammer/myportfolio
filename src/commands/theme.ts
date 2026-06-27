import type { Command, TerminalApi, Theme } from './types'
import { colors } from '../utils/formatters'

const themes: Theme[] = ['green', 'amber', 'white', 'matrix']
const themeNames: Record<Theme, string> = {
  green: 'Green (Classic)',
  amber: 'Amber (Retro)',
  white: 'White (Modern)',
  matrix: 'Matrix (Neon)',
}

export const theme: Command = {
  name: 'theme',
  description: 'Change terminal color theme',
  usage: 'theme [green|amber|white|matrix]',
  execute(args: string[], api: TerminalApi) {
    if (args.length === 0) {
      api.writeln(`${colors.bold}Available themes:${colors.reset}`)
      for (const t of themes) {
        api.writeln(`  ${colors.green}${t}${colors.reset} — ${themeNames[t]}`)
      }
      api.writeln(
        `\n${colors.dim}Usage: theme <theme-name>${colors.reset}`,
      )
      return
    }

    const requested = args[0].toLowerCase() as Theme
    if (!themes.includes(requested)) {
      api.writeln(
        `${colors.red}Unknown theme '${requested}'. Available themes: ${themes.join(', ')}${colors.reset}`,
      )
      return
    }

    api.setTheme(requested)
    api.writeln(
      `${colors.green}Theme changed to ${themeNames[requested]}${colors.reset}`,
    )
  },
}
