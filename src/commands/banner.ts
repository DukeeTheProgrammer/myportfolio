import type { Command, TerminalApi } from './types'
import { BANNER } from '../utils/ascii'
import { colors } from '../utils/formatters'

export const banner: Command = {
  name: 'banner',
  aliases: ['intro', 'welcome'],
  description: 'Show the welcome banner',
  execute(_args: string[], api: TerminalApi) {
    api.write(BANNER)
    api.writeln('')
    api.writeln(
      `${colors.green}Welcome to my interactive terminal portfolio!${colors.reset}`,
    )
    api.writeln(
      `${colors.dim}Type '${colors.green}help${colors.dim}' to see available commands.${colors.reset}`,
    )
    api.writeln('')
  },
}
