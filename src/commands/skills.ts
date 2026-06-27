import type { Command, TerminalApi } from './types'
import { SKILLS } from '../data/skills'
import { colors, table } from '../utils/formatters'

export const skills: Command = {
  name: 'skills',
  description: 'List technical skills grouped by category',
  usage: 'skills [--lang <language>]',
  execute(args: string[], api: TerminalApi) {
    const langIdx = args.indexOf('--lang')
    const filterLang = langIdx !== -1 && args[langIdx + 1]
      ? args[langIdx + 1].toLowerCase()
      : null

    let categories = SKILLS
    if (filterLang) {
      categories = SKILLS
        .map((cat) => ({
          ...cat,
          items: cat.items.filter(
            (s) => s.name.toLowerCase().includes(filterLang),
          ),
        }))
        .filter((cat) => cat.items.length > 0)
      if (categories.length === 0) {
        api.writeln(
          `${colors.yellow}No skills found matching '${filterLang}'${colors.reset}`,
        )
        return
      }
    }

    for (const cat of categories) {
      api.writeln(`\n${colors.cyan}${cat.category}${colors.reset}`)
      const rows = cat.items.map((s) => [
        `  ${colors.green}◆${colors.reset}`,
        s.name,
      ])
      api.writeln(table(rows))
    }
    api.writeln('')
  },
}
