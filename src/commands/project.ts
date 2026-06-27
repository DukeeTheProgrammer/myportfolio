import type { Command, TerminalApi } from './types'
import { fetchRepoDetail, LANGUAGE_COLORS } from '../hooks/useGitHub'
import { colors } from '../utils/formatters'

export const project: Command = {
  name: 'project',
  aliases: ['open', 'repo'],
  description: 'Show detailed information about a specific repository',
  usage: 'project <repository-name>',
  async execute(args: string[], api: TerminalApi) {
    if (args.length === 0) {
      api.writeln(
        `${colors.yellow}Usage: project <repository-name>${colors.reset}`,
      )
      api.writeln(
        `${colors.dim}Example: project my-awesome-project${colors.reset}`,
      )
      return
    }

    const repoName = args[0]
    api.writeln(
      `${colors.dim}Fetching ${repoName} from GitHub...${colors.reset}`,
    )

    try {
      const repo = await fetchRepoDetail(repoName)
      if (!repo) {
        api.writeln(
          `${colors.red}Repository '${repoName}' not found.${colors.reset}`,
        )
        return
      }

      api.writeln('')
      api.writeln(
        `${colors.bold}${colors.green}${repo.name}${colors.reset}`,
      )
      api.writeln(`${colors.dim}${'─'.repeat(50)}${colors.reset}`)
      if (repo.description) {
        api.writeln(`${repo.description}`)
        api.writeln('')
      }

      if (repo.language) {
        const color = LANGUAGE_COLORS[repo.language] || ''
        api.writeln(
          `${colors.bold}Language:${colors.reset} ${color}●${colors.reset} ${repo.language}`,
        )
      }

      if (Object.keys(repo.languages).length > 0) {
        const total = Object.values(repo.languages).reduce((a, b) => a + b, 0)
        const langs = Object.entries(repo.languages)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
        const langStr = langs
          .map(
            ([lang, bytes]) =>
              `${LANGUAGE_COLORS[lang] || ''}${lang}${colors.reset} ${((bytes / total) * 100).toFixed(1)}%`,
          )
          .join('  ')
        api.writeln(`${colors.bold}Languages:${colors.reset} ${langStr}`)
      }

      api.writeln(
        `${colors.bold}Stars:${colors.reset} ${colors.yellow}★${colors.reset} ${repo.stargazers_count}`,
      )
      api.writeln(
        `${colors.bold}Forks:${colors.reset} ${repo.forks_count}`,
      )
      if (repo.topics && repo.topics.length > 0) {
        api.writeln(
          `${colors.bold}Topics:${colors.reset} ${repo.topics.map((t) => `${colors.cyan}${t}${colors.reset}`).join(', ')}`,
        )
      }
      api.writeln(
        `${colors.bold}Last updated:${colors.reset} ${new Date(repo.updated_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
      )
      api.writeln('')
      api.writeln(
        `${colors.bold}URL:${colors.reset} ${repo.html_url}`,
      )
      if (repo.homepage) {
        api.writeln(
          `${colors.bold}Homepage:${colors.reset} ${repo.homepage}`,
        )
      }
    } catch (err) {
      api.writeln(
        `${colors.red}Error fetching repository: ${err instanceof Error ? err.message : 'Unknown error'}${colors.reset}`,
      )
    }
  },
}
