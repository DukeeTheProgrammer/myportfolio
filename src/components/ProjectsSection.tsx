import { motion } from 'framer-motion'
import { PROJECTS } from '../data/projects'

const container = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
}
const row = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function ProjectsSection() {
  return (
    <section id="work" className="section rule">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2 className="display text-[clamp(2.8rem,6vw,5rem)] text-paper">
            Selected work
          </h2>
          <p className="font-mono text-[11px] text-muted max-w-[38ch] leading-relaxed">
            A few things I&apos;ve put into the world. Every live link opens the real, running project.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="border-t border-line"
        >
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              variants={row}
              className="work-row grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-5 py-8 md:py-10 border-b border-line px-2 -mx-2"
            >
              {/* index */}
              <div className="lg:col-span-1 font-mono text-[11px] text-violet pt-2">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* title + description */}
              <div className="lg:col-span-6">
                <div className="flex items-baseline gap-4 flex-wrap">
                  <h3 className="display text-[2.1rem] md:text-[2.6rem] text-paper leading-none">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[10px] text-muted">{project.year}</span>
                </div>
                <p className="text-muted text-[0.95rem] mt-4 max-w-[58ch] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* stack */}
              <div className="lg:col-span-2 flex flex-wrap gap-x-3 gap-y-1 content-start pt-2">
                {project.stack.map((s) => (
                  <span key={s} className="font-mono text-[10px] text-muted">
                    {s}
                  </span>
                ))}
              </div>

              {/* actions */}
              <div className="lg:col-span-3 flex flex-wrap items-start gap-3 pt-1">
                {project.liveUrl && (
                  <button
                    onClick={() =>
                      window.open(project.liveUrl!, '_blank', 'noopener,noreferrer')
                    }
                    className="btn !py-2.5 !px-5 !text-[12px]"
                    title={`Open ${project.title} live`}
                  >
                    View live
                  </button>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost !py-2.5 !px-5 !text-[12px]"
                >
                  Source
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12">
          <a
            href="https://github.com/DukeeTheProgrammer"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-muted border-b border-line pb-1 hover:text-violet hover:border-violet transition-colors"
          >
            All repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
