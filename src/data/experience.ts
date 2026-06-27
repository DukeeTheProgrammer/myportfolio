export interface Experience {
  role: string
  company: string
  location: string
  startDate: string
  endDate: string | 'Present'
  description: string[]
}

export const EXPERIENCES: Experience[] = [
  {
    role: 'Full Stack Developer',
    company: 'Your Company',
    location: 'Remote',
    startDate: 'Jan 2024',
    endDate: 'Present',
    description: [
      'Built and maintained full-stack web applications',
      'Designed and implemented RESTful APIs',
      'Optimized database queries and application performance',
    ],
  },
]

export const EDUCATION = [
  {
    degree: 'B.S. in Computer Science',
    school: 'Uniport',
    year: '2024 — Present',
  },
]
