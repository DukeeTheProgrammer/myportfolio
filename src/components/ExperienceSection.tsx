import { EXPERIENCES, EDUCATION } from '../data/experience'

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 px-6 border-t border-[#00ff41]/10"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-lg text-[#00ff41] mb-2">
          <span className="text-gray-500">$</span> experience --timeline
        </h2>

        <div className="mt-8 space-y-0">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="relative pl-8 pb-8 border-l border-[#00ff41]/20">
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-[#00ff41]" />
              <div className="border border-[#00ff41]/20 rounded-lg p-5 bg-[#0d1117]/50 ml-4">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                  <div>
                    <h3 className="font-mono text-sm font-bold text-gray-100">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs text-[#3399ff]">
                      {exp.company}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-gray-500 shrink-0">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>
                <p className="text-gray-500 font-mono text-[10px] mb-2">{exp.location}</p>
                <ul className="space-y-1">
                  {exp.description.map((desc, j) => (
                    <li
                      key={j}
                      className="text-gray-400 font-mono text-xs flex gap-2"
                    >
                      <span className="text-[#00ff41] shrink-0">▸</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-mono text-lg text-[#00ff41] mb-2 mt-16">
          <span className="text-gray-500">$</span> education
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {EDUCATION.map((edu, i) => (
            <div
              key={i}
              className="border border-[#00ff41]/20 rounded-lg p-5 bg-[#0d1117]/50"
            >
              <h3 className="font-mono text-sm font-bold text-gray-100">
                {edu.degree}
              </h3>
              <p className="font-mono text-xs text-gray-400 mt-1">
                {edu.school}
              </p>
              <p className="font-mono text-[10px] text-gray-500 mt-1">
                {edu.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
