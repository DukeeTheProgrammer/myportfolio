import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Layers, Target, User } from 'lucide-react'

export default function HeroSection() {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="home" className="relative min-h-[90vh] sm:min-h-[100vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Decorative glow blobs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: content */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/60 backdrop-blur-sm text-accent text-xs font-mono font-bold uppercase tracking-wider"
          >
            <Layers className="w-3 h-3" /> Available for work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            Building digital{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-400 to-blue-500">
              experiences
            </span>
            that matter.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg sm:text-xl text-secondary max-w-lg leading-relaxed"
          >
            I&apos;m Dukee — a full-stack developer crafting clean, performant,
            and modern web applications. I turn ideas into production-ready
            products with care for detail and user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="btn btn-primary"
            >
              View Work <Code className="icon ml-1" />
            </a>
            <a
              href="mailto:hello@dukidetheprogrammer.dev"
              className="btn btn-outline"
            >
              Get in Touch <Target className="icon ml-1" />
            </a>
          </motion.div>
        </div>

        {/* Right: profile photo card */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg shadow-accent-glow group">
            {imageError ? (
              <div className="w-full h-auto max-w-[420px] mx-auto bg-surface flex flex-col items-center justify-center py-16">
                <div className="w-32 h-32 rounded-full bg-accent/20 border border-accent/40 mb-4 flex items-center justify-center mx-auto text-4xl font-bold text-accent">
                  <User className="w-12 h-12" />
                </div>
                <p className="text-sm text-muted font-medium">Add your photo</p>
                <p className="text-xs text-dim mt-1">
                  Save your picture as public/profile.jpg
                </p>
              </div>
            ) : (
              <img
                src="/profile.jpg"
                alt="Dukee TheProgrammer — professional headshot"
                className="w-full h-auto block max-w-[420px] mx-auto"
                loading="lazy"
                onError={() => setImageError(true)}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-primary">Dukee TheProgrammer</h3>
              <p className="text-sm text-accent font-mono font-bold">Full-Stack Developer</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted"
      >
        <span className="text-xs font-mono uppercase tracking-widest">scroll ↓</span>
      </motion.div>
    </section>
  )
}
