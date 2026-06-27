export interface Skill {
  name: string
  level?: number // 1-5
}

export interface SkillCategory {
  category: string
  items: Skill[]
}

export const SKILLS: SkillCategory[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'HTML/CSS' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js' },
      { name: 'Python' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'REST APIs' },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Docker' },
      { name: 'Git' },
      { name: 'Linux' },
      { name: 'CI/CD' },
      { name: 'Cloud (AWS/GCP)' },
    ],
  },
]
