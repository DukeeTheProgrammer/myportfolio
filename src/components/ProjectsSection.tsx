import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '../data/projects'

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section bg-surface border-y border-border">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>
            A selection of work I&apos;ve built. Click <b>View Live</b> on any card to
            open the live site.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              initial="hidden"
              animate="show"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/DukieTheProgrammer"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Explore all repositories{' '}
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}
