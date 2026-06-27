export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 border-t border-[#00ff41]/10"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-lg text-[#00ff41] mb-2">
          <span className="text-gray-500">$</span> about --me
        </h2>
        <div className="border border-[#00ff41]/20 rounded-lg p-6 md:p-8 bg-[#0d1117]/50">
          <p className="text-gray-300 font-mono text-sm md:text-base leading-relaxed mb-4">
            Hey, I'm <span className="text-[#00ff41] font-bold">Dukee TheProgrammer</span> — a full-stack developer who
            loves turning complex problems into simple, elegant solutions.
          </p>
          <p className="text-gray-400 font-mono text-sm md:text-base leading-relaxed mb-4">
            I work across the entire stack — from designing responsive UIs with React
            and TypeScript, to building scalable APIs and managing databases.
            I'm equally at home in the frontend trenches and the backend infrastructure.
          </p>
          <p className="text-gray-400 font-mono text-sm md:text-base leading-relaxed">
            When I'm not coding, you'll find me exploring new tech, contributing to
            open source, or tweaking my Neovim config for the hundredth time.
          </p>
        </div>
      </div>
    </section>
  )
}
