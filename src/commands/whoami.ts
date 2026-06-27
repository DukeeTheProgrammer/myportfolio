import type { Command, TerminalApi } from './types'
import { colors } from '../utils/formatters'

export const whoami: Command = {
  name: 'whoami',
  description: 'Display information about the current user (me)',
  execute(_args: string[], api: TerminalApi) {
    api.writeln(`${colors.green}Dukee TheProgrammer${colors.reset}`)
    api.writeln(`${colors.dim}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`)
    api.writeln(`${colors.bold}Role:${colors.reset} Full Stack Developer`)
    api.writeln(`${colors.bold}Location:${colors.reset} Earth`)
    api.writeln(`${colors.bold}Email:${colors.reset} ujiroduke1@gmail.com`)
    api.writeln(`${colors.bold}GitHub:${colors.reset} https://github.com/DukeeTheProgrammer`)
    api.writeln('')
    api.writeln(
      `${colors.dim}Full-stack developer passionate about building elegant,`,
    )
    api.writeln(`${colors.dim}performant applications. Love exploring new technologies`)
    api.writeln(`${colors.dim}and solving complex problems with clean code.${colors.reset}`)
  },
}
