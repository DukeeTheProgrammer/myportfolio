import { motion } from 'framer-motion'
import { Laptop, Code, Cpu, Palette } from 'lucide-react'

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: Laptop,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    icon: Cpu,
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Tools',
    icon: Code,
    skills: ['Git', 'GitHub', 'Vite', 'VS Code', 'Figma'],
  },
  {
    title: 'Other',
    icon: Palette,
    skills: ['UI/UX Design', 'Responsive Design', 'Performance', 'Accessibility'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Skills</h2>
          <p>Technologies and tools I work with regularly.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-surface border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent"
                >
                  <cat.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-primary">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded border border-border text-sm text-secondary bg-surface hover:bg-surface-hover hover:text-primary hover:border-accent transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
