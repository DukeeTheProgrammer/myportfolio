export interface Project {
  id: string
  title: string
  description: string
  liveUrl: string | null
  githubUrl: string
  stack: string[]
  year: string
}

// Real repositories from github.com/DukeeTheProgrammer
export const PROJECTS: Project[] = [
  {
    id: 'quicktopup',
    title: 'QuickTopUp.ng',
    description:
      'A full virtual top-up frontend for airtime, data bundles and bill payments, built as a responsive React application.',
    liveUrl: 'https://quicktopup.it.com',
    githubUrl: 'https://github.com/DukeeTheProgrammer/quicktopup-frontend',
    stack: ['React', 'JavaScript', 'Vite'],
    year: '2026',
  },
  {
    id: 'd-short',
    title: 'dshort',
    description:
      'A URL shortener that turns long links into short, shareable ones. Built to be simple and fast.',
    liveUrl: 'https://short-link.pxxl.click',
    githubUrl: 'https://github.com/DukeeTheProgrammer/d-short',
    stack: ['HTML', 'JavaScript'],
    year: '2026',
  },
  {
    id: 'vertex-cloud',
    title: 'Vertex Cloud',
    description:
      'A cloud storage service for static files and images, built for fast delivery and simple integration.',
    liveUrl: 'https://vertex-cloud.pxxl.click',
    githubUrl: 'https://github.com/DukeeTheProgrammer/Vertex-Cloud',
    stack: ['HTML', 'Storage', 'API'],
    year: '2025',
  },
  {
    id: 'vertex-docs',
    title: 'Vertex Documentation',
    description:
      'Documentation site explaining Vertex Cloud in plain language, with guides and endpoint references.',
    liveUrl: 'https://vertexcloud-documentation.pxxl.click',
    githubUrl: 'https://github.com/DukeeTheProgrammer/vertexcloud-documentation',
    stack: ['HTML', 'Docs'],
    year: '2025',
  },
  {
    id: 'portfolio',
    title: 'dukee.dev',
    description:
      'This portfolio — an editorial take on the developer portfolio, built with React, TypeScript and Tailwind.',
    liveUrl: 'https://myportfolio-rho-six-95.vercel.app',
    githubUrl: 'https://github.com/DukeeTheProgrammer/myportfolio',
    stack: ['React', 'TypeScript', 'Tailwind'],
    year: '2026',
  },
  {
    id: 'envsync',
    title: 'envsync',
    description:
      'A command-line tool that syncs .env files across Git worktrees so environment config never gets lost when switching branches.',
    liveUrl: null,
    githubUrl: 'https://github.com/DukeeTheProgrammer/envsync',
    stack: ['Rust', 'CLI'],
    year: '2026',
  },
]
