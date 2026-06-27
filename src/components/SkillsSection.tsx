import { SKILLS } from '../data/skills'

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 px-6 border-t border-[#00ff41]/10"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-lg text-[#00ff41] mb-2">
          <span className="text-gray-500">$</span> skills --verbose
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {SKILLS.map((category) => (
            <div
              key={category.category}
              className="border border-[#00ff41]/20 rounded-lg p-5 bg-[#0d1117]/50"
            >
              <h3 className="font-mono text-sm font-bold text-[#3399ff] mb-4">
                {'// '}{category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs text-gray-300">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="font-mono text-[10px] text-gray-500">
                          {skill.level}/5
                        </span>
                      )}
                    </div>
                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#00ff41] rounded-full transition-all duration-500"
                        style={{
                          width: `${(skill.level || 4) * 20}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
