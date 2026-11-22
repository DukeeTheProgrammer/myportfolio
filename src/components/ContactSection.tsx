export default function ContactSection() {
  return (
    <section id="contact" className="section rule">
      <div className="container">
        <p className="font-mono text-[11px] text-violet mb-10">Contact</p>

        <h2 className="display text-[clamp(3rem,8vw,7rem)] text-paper leading-[0.95] max-w-[16ch]">
          Have something in mind?
        </h2>

        <div className="mt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 border-t border-line pt-10">
          <a
            href="mailto:ujiroduke1@gmail.com"
            className="display text-[clamp(1.8rem,4vw,3.2rem)] text-paper border-b border-violet pb-1 hover:text-violet transition-colors"
          >
            ujiroduke1@gmail.com
          </a>

          <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] text-muted">
            <a
              href="https://github.com/DukeeTheProgrammer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/dukeetheprogrammer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/dukeetheprogrammer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet transition-colors"
            >
              X / Twitter
            </a>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-line flex flex-col sm:flex-row justify-between gap-4 font-mono text-[10px] tracking-wide text-muted/70">
          <span>© {new Date().getFullYear()} dukee.dev</span>
          <span>Built with care.</span>
        </footer>
      </div>
    </section>
  )
}
