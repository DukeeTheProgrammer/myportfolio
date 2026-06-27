import type { Command, TerminalApi } from './types'
import { EXPERIENCES, EDUCATION } from '../data/experience'
import { colors } from '../utils/formatters'

export const experience: Command = {
  name: 'experience',
  aliases: ['work', 'career'],
  description: 'Show work experience and education',
  execute(_args: string[], api: TerminalApi) {
    api.writeln(`${colors.bold}${colors.green}Work Experience${colors.reset}`)
    api.writeln(`${colors.dim}${'─'.repeat(50)}${colors.reset}`)

    for (const exp of EXPERIENCES) {
      api.writeln('')
      api.writeln(
        `${colors.bold}${exp.role}${colors.reset} ${colors.dim}@${colors.reset} ${colors.cyan}${exp.company}${colors.reset}`,
      )
      api.writeln(
        `  ${colors.dim}${exp.startDate} — ${exp.endDate} | ${exp.location}${colors.reset}`,
      )
      for (const desc of exp.description) {
        api.writeln(`  ${colors.green}▸${colors.reset} ${desc}`)
      }
    }

    api.writeln('')
    api.writeln(`${colors.bold}${colors.green}Education${colors.reset}`)
    api.writeln(`${colors.dim}${'─'.repeat(50)}${colors.reset}`)

    for (const edu of EDUCATION) {
      api.writeln('')
      api.writeln(
        `  ${colors.bold}${edu.degree}${colors.reset}`,
      )
      api.writeln(
        `  ${colors.dim}${edu.school} | ${edu.year}${colors.reset}`,
      )
    }
    api.writeln('')
  },
}
