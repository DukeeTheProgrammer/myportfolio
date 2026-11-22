import { motion } from 'framer-motion'
import { Briefcase, Code2, GraduationCap } from 'lucide-react'

const EXPERIENCE = [
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Self-Employed',
    period: '2022 – Present',
    desc: 'Building custom web applications and portfolios for clients, focusing on modern design, performance, and clean code.',
    icon: Briefcase,
  },
  {
    role: 'Open Source Contributor',
    company: 'Community Projects',
    period: '2021 – Present',
    desc: 'Contributing to open-source repositories and maintaining personal projects on GitHub.',
    icon: Code2,
  },
  {
    role: 'Self-Taught Developer',
    company: 'Independent Study',
    period: '2019 – 2022',
    desc: 'Developed core programming skills in web development, JavaScript, and software engineering fundamentals.',
    icon: GraduationCap,
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="section bg-surface border-y border-border">
      <div className="container">
        <div className="section-header">
          <h2>Experience</h2>
          <p>A timeline of my journey as a developer.</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

          {EXPERIENCE.map((item, i) => {
            const isLast = i === EXPERIENCE.length - 1
            return (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-16 pt-8 pb-4"
              >
                <div className="absolute left-0 top-2.5 w-3 h-3 rounded-full bg-accent border-2 border-surface shadow-[0_0_0_4px_rgba(99,102,241,0.2)]" />
                {!isLast && (
                  <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border" />
                )}

                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-primary">
                      {item.role}
                    </h4>
                    <p className="text-accent font-mono text-sm font-bold">{item.company}</p>
                    <p className="text-muted text-sm mt-1">{item.period}</p>
                    <p className="text-secondary mt-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
