const GROUPS = [
  {
    label: 'Interface',
    items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    label: 'Server',
    items: ['Node.js', 'Python', 'Django', 'REST APIs', 'PostgreSQL'],
  },
  {
    label: 'Craft',
    items: ['Rust', 'Git', 'Vite', 'Figma', 'Accessibility'],
  },
]

export default function SkillsSection() {
  return (
    <section id="capabilities" className="section rule">
      <div className="container grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-3">
          <p className="font-mono text-[11px] text-violet">Capabilities</p>
        </div>

        <div className="lg:col-span-9 grid md:grid-cols-3 gap-10 md:gap-8">
          {GROUPS.map((group) => (
            <div key={group.label} className="border-t border-line pt-5">
              <h3 className="display text-2xl text-paper mb-5">{group.label}</h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="text-[0.95rem] text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
