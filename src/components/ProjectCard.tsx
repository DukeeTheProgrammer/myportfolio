import { motion } from 'framer-motion'
import { Code2, Play } from 'lucide-react'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-xl border border-border bg-surface p-6 hover:border-border-hover hover:shadow-lg transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Thumbnail */}
      <div className="aspect-[4/3] rounded-lg overflow-hidden mb-5 border border-border bg-gray-900">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          {project.featured && (
            <span className="text-xs font-mono font-bold text-accent bg-accent/10 px-2 py-1 rounded border border-accent/20">
              Featured
            </span>
          )}
        </div>

        <p className="text-secondary text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded border border-border text-xs text-muted font-mono hover:border-accent hover:text-accent transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 pt-4 border-t border-border">
          {/* View Live button — interactive button, opens live site */}
          <button
            onClick={() =>
              window.open(project.liveUrl, '_blank', 'noopener,noreferrer')
            }
            className="flex-1 btn btn-primary text-sm"
            title={`View ${project.title} live`}
          >
            <Play className="w-4 h-4 mr-2" /> View Live
          </button>

          {/* Source code link */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 rounded border border-border text-secondary hover:text-accent hover:border-accent hover:bg-accent/5 transition-all text-sm"
            title="View source on GitHub"
          >
            <Code2 className="w-4 h-4" /> Source
          </a>
        </div>
      </div>
    </motion.div>
  )
}
