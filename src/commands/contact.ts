import type { Command, TerminalApi } from './types'
import { colors } from '../utils/formatters'

export const contact: Command = {
  name: 'contact',
  aliases: ['email', 'social'],
  description: 'Show contact information and social links',
  execute(_args: string[], api: TerminalApi) {
    api.writeln(`${colors.bold}${colors.green}Contact${colors.reset}`)
    api.writeln(`${colors.dim}${'─'.repeat(50)}${colors.reset}`)
    api.writeln('')
    api.writeln(`  ${colors.bold}Email:${colors.reset}    ujiroduke1@gmail.com`)
    api.writeln(
      `  ${colors.bold}GitHub:${colors.reset}   ${colors.cyan}https://github.com/DukeeTheProgrammer${colors.reset}`,
    )
    api.writeln(
      `  ${colors.bold}Twitter:${colors.reset}  ${colors.cyan}https://x.com/dukeethedev${colors.reset}`,
    )
    api.writeln('')
    api.writeln(
      `${colors.dim}Want to get in touch? Send me an email or DM on Twitter/X.${colors.reset}`,
    )
  },
}
