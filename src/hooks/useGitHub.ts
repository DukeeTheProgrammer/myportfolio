const GITHUB_API = 'https://api.github.com'
const USERNAME = 'DukeeTheProgrammer'

interface GitHubRepo {
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
  topics: string[]
  homepage: string | null
}

interface GitHubRepoDetail extends GitHubRepo {
  languages: Record<string, number>
}

const cache = new Map<string, { data: unknown; timestamp: number }>()
const CACHE_TTL = 5 * 60 * 1000

async function fetchWithCache<T>(url: string): Promise<T> {
  const cached = cache.get(url)
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data as T
  }
  const res = await fetch(url, {
    headers: { Accept: 'application/vnd.github.v3+json' },
  })
  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`)
  }
  const data = (await res.json()) as T
  cache.set(url, { data, timestamp: Date.now() })
  return data
}

export async function fetchPinnedRepos(
  pinnedNames: string[],
): Promise<GitHubRepo[]> {
  if (pinnedNames.length === 0) {
    const allRepos = await fetchWithCache<GitHubRepo[]>(
      `${GITHUB_API}/users/${USERNAME}/repos?sort=updated&per_page=30`,
    )
    return allRepos
  }
  const repos = await Promise.all(
    pinnedNames.map((name) =>
      fetchWithCache<GitHubRepo>(
        `${GITHUB_API}/repos/${USERNAME}/${name}`,
      ).catch(() => null),
    ),
  )
  return repos.filter((r): r is GitHubRepo => r !== null)
}

export async function fetchRepoDetail(
  name: string,
): Promise<GitHubRepoDetail | null> {
  try {
    const [repo, languages] = await Promise.all([
      fetchWithCache<GitHubRepo>(
        `${GITHUB_API}/repos/${USERNAME}/${name}`,
      ),
      fetchWithCache<Record<string, number>>(
        `${GITHUB_API}/repos/${USERNAME}/${name}/languages`,
      ),
    ])
    return { ...repo, languages }
  } catch {
    return null
  }
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '\x1b[34m',
  JavaScript: '\x1b[33m',
  Python: '\x1b[36m',
  HTML: '\x1b[31m',
  CSS: '\x1b[35m',
  Shell: '\x1b[32m',
  Dockerfile: '\x1b[34m',
  Rust: '\x1b[31m',
  Go: '\x1b[36m',
  Java: '\x1b[31m',
  Ruby: '\x1b[31m',
  'C++': '\x1b[34m',
  C: '\x1b[34m',
  'C#': '\x1b[32m',
}

export const LANGUAGE_HEX_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3572a5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Dockerfile: '#2496ed',
  Rust: '#dea584',
  Go: '#00add8',
  Java: '#b07219',
  Ruby: '#701516',
  'C++': '#f34b7d',
  C: '#555555',
  'C#': '#178600',
}
