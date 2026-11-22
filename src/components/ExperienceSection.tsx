const EXPERIENCE = [
  {
    period: '2022 — Now',
    role: 'Independent Developer',
    detail:
      'Building products and sites for clients — from initial idea through design, development and deployment.',
  },
  {
    period: '2021 — Now',
    role: 'Open Source & Side Projects',
    detail:
      'A steady stream of tools and experiments on GitHub, including a Rust CLI and a few small web services.',
  },
  {
    period: '2019 — 2022',
    role: 'Learning the Craft',
    detail:
      'Self-directed study in web development, software fundamentals and shipping things that work.',
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="section rule">
      <div className="container grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-3">
          <p className="font-mono text-[11px] text-violet">Experience</p>
        </div>

        <div className="lg:col-span-9 border-t border-line">
          {EXPERIENCE.map((item) => (
            <div
              key={item.role}
              className="grid md:grid-cols-4 gap-x-8 gap-y-3 py-8 md:py-10 border-b border-line"
            >
              <p className="font-mono text-[11px] text-muted pt-2">{item.period}</p>
              <div className="md:col-span-3">
                <h3 className="display text-[2rem] md:text-[2.4rem] text-paper leading-none">
                  {item.role}
                </h3>
                <p className="text-muted mt-4 max-w-[62ch] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
