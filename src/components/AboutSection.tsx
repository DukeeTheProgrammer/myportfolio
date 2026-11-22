import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="section rule">
      <div className="container grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-3">
          <p className="font-mono text-[11px] text-violet">About</p>
        </div>

        <div className="lg:col-span-9">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="display text-[clamp(2rem,4.4vw,3.6rem)] text-paper leading-[1.12] max-w-[24ch]"
          >
            I like the part where an idea becomes something people can actually use.
          </motion.p>

          <div className="mt-12 grid md:grid-cols-2 gap-10 max-w-[70ch]">
            <p className="text-muted leading-relaxed">
              I&apos;m Dukee, a full-stack developer. I work from the interface
              down through the API, and I&apos;m most interested in the details
              that make a product feel finished — the pacing of an interaction,
              a clear error message, a page that loads fast on a bad network.
            </p>
            <p className="text-muted leading-relaxed">
              My work spans customer-facing products, internal tools and small
              command-line utilities. I write React and TypeScript day to day,
              and I&apos;m comfortable picking up what a project needs rather
              than forcing it into a familiar shape.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 font-mono text-[11px] text-muted">
            <span>Based in Nigeria</span>
            <span>Working remotely</span>
            <span>Open to good problems</span>
          </div>
        </div>
      </div>
    </section>
  )
}
