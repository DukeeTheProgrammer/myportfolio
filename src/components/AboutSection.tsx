import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>
            I build things for the web — from idea to production. Always
            learning, always shipping.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-secondary leading-relaxed">
              I&apos;m Dukee, a full-stack developer passionate about creating
              clean, modern, and professional digital products. I enjoy solving
              real problems with code and pay close attention to detail,
              performance, and user experience.
            </p>
            <p className="text-secondary leading-relaxed">
              My stack centers on React, TypeScript, and Node.js, but I&apos;m
              always exploring new tools that help me build better, faster.
              Whether it&apos;s a responsive storefront, a data dashboard, or a
              collaborative tool, I aim to ship work that looks and feels
              polished.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/DukieTheProgrammer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-auto btn btn-outline text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C-0.8-9.5 0-9.399 0-9.399 0-9.399 2.34-1.733 2.34-1.733 2.34-1.733 4.38 1.293 4.38 1.293 4.38 1.293 4.38 1.293 7.38 0 7.38 0c0 0 0.547-0.175 1.485 0.655 0.39-0.475 0.985-0.75 1.64-0.75 0.39-0.475 0.985-0.75 1.64-0.75 1.64 0 2.86 1.923 2.86 1.923 1.418 2.74 4.352 1.91 5.248 1.457.123-1.157.473-2.05 0.923-2.525-3.369-0.4-6.91-1.69-6.91-8.43 0-1.865.637-3.395 1.69-4.6-.17-.44-0.82-2.22 0.16-4.63 0 0 1.36-0.44 4.46 1.65 1.23-0.36 2.58-0.55 3.92-0.55 1.34 0 2.69 0.19 3.92 0.55 3.1-2.1 4.46-1.65 4.46-1.65 0.98 2.41 0.33 4.23 0.16 4.63 0 1.826 0.66 3.395 1.69 4.6 1.64 1.055 2.23 1.78 2.23 1.78 1.93 1.21 4.23 1.05 4.23 1.05 0.45 1.19 0.65 2.47 0.65 3.52 0 0.22 0.12 0.45 0.56 0.577 4.77-1.59 8.205-6.09 8.205-11.385 0-6.627-5.374-12-12-12z"
                  />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/dukidetheprogrammer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-auto btn btn-outline text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-surface border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium text-secondary">Available for hire</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-medium text-secondary">Remote friendly</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-sm font-medium text-secondary">Open to collaboration</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
