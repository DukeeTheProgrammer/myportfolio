export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-6 border-t border-[#00ff41]/10"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-mono text-lg text-[#00ff41] mb-2">
          <span className="text-gray-500">$</span> contact --all
        </h2>

        <div className="mt-10 flex flex-col items-center gap-6">
          <p className="text-gray-400 font-mono text-sm">
            Want to work together or just say hi?
          </p>

          <a
            href="mailto:ujiroduke1@gmail.com"
            className="inline-flex items-center gap-2 font-mono text-sm border border-[#00ff41]/30 rounded-lg px-6 py-3 text-[#00ff41] hover:bg-[#00ff41]/10 hover:border-[#00ff41] transition-all duration-200"
          >
            <span className="text-lg">✉</span>
            ujiroduke1@gmail.com
          </a>

          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://github.com/DukeeTheProgrammer"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-gray-400 hover:text-[#00ff41] transition-colors border border-gray-800 rounded-lg px-4 py-2 hover:border-[#00ff41]/30"
            >
              GitHub
            </a>
            <a
              href="https://x.com/dukeethedev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-gray-400 hover:text-[#00ff41] transition-colors border border-gray-800 rounded-lg px-4 py-2 hover:border-[#00ff41]/30"
            >
              X / Twitter
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-[#00ff41]/10 pt-8">
          <p className="font-mono text-[10px] text-gray-600">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            © {new Date().getFullYear()} Dukee TheProgrammer — Built with{' '}
            <span className="text-[#00ff41]">React</span> +{' '}
            <span className="text-[#00ff41]">xterm.js</span>
          </p>
        </div>
      </div>
    </section>
  )
}
