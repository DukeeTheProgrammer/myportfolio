import { useEffect, useState } from 'react'
import { PINNED_REPOS } from '../data/pinned-repos'
import { fetchPinnedRepos, LANGUAGE_HEX_COLORS } from '../hooks/useGitHub'

interface Repo {
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  homepage: string | null
}

export default function ProjectsSection() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPinnedRepos(PINNED_REPOS)
      .then(setRepos)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 px-4 sm:px-6 border-t border-[#00ff41]/10"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-lg text-[#00ff41] mb-2">
          <span className="text-gray-500">$</span> projects --list
        </h2>
        <p className="text-gray-500 font-mono text-xs mb-8">
          // Live data from GitHub
        </p>

        {loading && (
          <div className="flex items-center gap-2 text-gray-500 font-mono text-sm">
            <span className="animate-pulse">⏳</span> Fetching repositories...
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-[#00ff41]/20 rounded-lg p-5 bg-[#0d1117]/50 hover:border-[#00ff41]/50 hover:bg-[#0d1117] transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-mono text-sm font-bold text-[#00ff41] group-hover:text-[#33ff66] transition-colors">
                  {repo.name}
                </h3>
                <div className="flex items-center gap-3 text-gray-500 text-xs font-mono shrink-0 ml-4">
                  <span>★ {repo.stargazers_count}</span>
                  <span>⑂ {repo.forks_count}</span>
                </div>
              </div>

              {repo.description && (
                <p className="text-gray-400 font-mono text-xs leading-relaxed mb-3 line-clamp-2">
                  {repo.description}
                </p>
              )}

              <div className="flex items-center gap-3 flex-wrap">
                {repo.language && (
                  <span className="flex items-center gap-1.5 text-gray-400 font-mono text-xs">
                    <span
                          className="w-2.5 h-2.5 rounded-full inline-block"
                          style={{
                            backgroundColor:
                              LANGUAGE_HEX_COLORS[repo.language] || '#888',
                          }}
                        />
                    {repo.language}
                  </span>
                )}
                {repo.topics?.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-0.5 bg-[#00ff41]/10 text-[#00ff41]/80 rounded text-[10px] font-mono"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
