export interface Project {
  id: string
  title: string
  description: string
  liveUrl: string
  githubUrl: string
  image: string // placeholder hero/thumbnail for the card
  tags: string[]
  featured: boolean
}

export const PROJECTS: Project[] = [
  {
    id: "ecommerce-platform",
    title: "Nova Commerce",
    description:
      "A full-stack e-commerce platform with Stripe payments, admin dashboard, real-time inventory tracking, and responsive storefront built with React and Node.js.",
    liveUrl: "https://dukidetheprogrammer.github.io/nova-commerce",
    githubUrl: "https://github.com/DukieTheProgrammer/nova-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&q=80",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL", "Tailwind"],
    featured: true,
  },
  {
    id: "task-manager",
    title: "FlowTask",
    description:
      "Collaborative task management app with drag-and-drop Kanban boards, team workspaces, comments, and email notifications. Optimized for remote teams.",
    liveUrl: "https://dukidetheprogrammer.github.io/flowtask",
    githubUrl: "https://github.com/DukieTheProgrammer/flowtask",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    tags: ["React", "Firebase", "TypeScript", "Tailwind"],
    featured: true,
  },
  {
    id: "analytics-dashboard",
    title: "Insight Dashboard",
    description:
      "Data visualization dashboard with interactive charts, date-range filters, CSV export, and role-based access. Built for performance with large datasets.",
    liveUrl: "https://dukidetheprogrammer.github.io/insight-dashboard",
    githubUrl: "https://github.com/DukieTheProgrammer/insight-dashboard",
    image: "https://images.unsplash.com/photo-1551288049-b9e78768f8e6?w=800&q=80",
    tags: ["React", "Chart.js", "TypeScript", "Node.js"],
    featured: false,
  },
  {
    id: "crypto-tracker",
    title: "CryptoPulse",
    description:
      "Real-time cryptocurrency price tracker with portfolio management, price alerts, and historical charts. WebSocket-powered live updates.",
    liveUrl: "https://dukidetheprogrammer.github.io/cryptopulse",
    githubUrl: "https://github.com/DukieTheProgrammer/cryptopulse",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    tags: ["React", "WebSocket", "Chart.js", "Tailwind"],
    featured: false,
  },
]
