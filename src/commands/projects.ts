import type { Command, TerminalApi } from './types'
import { PINNED_REPOS } from '../data/pinned-repos'
import { fetchPinnedRepos, formatDate, LANGUAGE_COLORS } from '../hooks/useGitHub'
import { colors, table } from '../utils/formatters'

export const projects: Command = {
  name: 'projects',
  description: 'List pinned GitHub repositories with live data',
  usage: 'projects [--sort stars] [--lang <language>]',
  async execute(args: string[], api: TerminalApi) {
    api.writeln(`${colors.dim}Fetching repositories from GitHub...${colors.reset}`)

    try {
      let repos = await fetchPinnedRepos(PINNED_REPOS)

      if (repos.length === 0) {
        api.writeln(`${colors.yellow}No repositories found.${colors.reset}`)
        return
      }

      const sortStars = args.includes('--sort') && args.includes('stars')
      if (sortStars) {
        repos.sort((a, b) => b.stargazers_count - a.stargazers_count)
      }

      const langIdx = args.indexOf('--lang')
      if (langIdx !== -1 && args[langIdx + 1]) {
        const lang = args[langIdx + 1].toLowerCase()
        repos = repos.filter((r) => r.language?.toLowerCase() === lang)
      }

      const rows = repos.map((r) => [
        `${colors.green}${r.name}${colors.reset}`,
        r.language
          ? `${LANGUAGE_COLORS[r.language] || ''}●${colors.reset} ${r.language}`
          : `${colors.dim}—${colors.reset}`,
        `${colors.yellow}★${colors.reset} ${r.stargazers_count}`,
        formatDate(r.updated_at),
        r.description
          ? (r.description.length > 40
            ? r.description.slice(0, 37) + '...'
            : r.description)
          : '',
      ])
      api.writeln(
        `\n${colors.bold}Repositories${colors.reset} (${repos.length})\n`,
      )
      api.writeln(table(rows))
      api.writeln(
        `\n${colors.dim}Tip: type 'project <name>' for details on a specific repo${colors.reset}`,
      )
    } catch (err) {
      api.writeln(
        `${colors.red}Error fetching repositories: ${err instanceof Error ? err.message : 'Unknown error'}${colors.reset}`,
      )
    }
  },
}
