import { motion } from 'framer-motion'

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.7, ease: 'easeOut' as const },
  }),
}

export default function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* single quiet accent: a thin vertical rule far right */}
      <div className="hidden lg:block absolute right-10 top-0 bottom-0 w-px bg-line" />

      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Text */}
        <div className="lg:col-span-7">
          <motion.p
            variants={rise}
            custom={0}
            initial="hidden"
            animate="show"
            className="font-mono text-[11px] tracking-wide text-violet mb-8"
          >
            Full-stack developer · Available for select work
          </motion.p>

          <motion.h1
            variants={rise}
            custom={1}
            initial="hidden"
            animate="show"
            className="display text-[clamp(3.4rem,8vw,7.4rem)] text-paper"
          >
            Software that
            <br />
            <span className="italic text-lilac">feels considered.</span>
          </motion.h1>

          <motion.p
            variants={rise}
            custom={2}
            initial="hidden"
            animate="show"
            className="mt-9 max-w-[46ch] text-[1.05rem] text-muted leading-relaxed"
          >
            I&apos;m Dukee — a developer who builds across the stack, from the
            interface down to the API. I care about the small things: how it
            reads, how it responds, and how it holds up in production.
          </motion.p>

          <motion.div
            variants={rise}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#work" className="btn">
              See selected work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Start a conversation
            </a>
          </motion.div>

          <motion.p
            variants={rise}
            custom={4}
            initial="hidden"
            animate="show"
            className="mt-14 font-mono text-[10px] tracking-widest text-muted/60"
          >
            SCROLL TO EXPLORE
          </motion.p>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="lg:col-span-5 relative justify-self-center lg:justify-self-end w-full max-w-[440px]"
        >
          <div className="absolute -top-4 -right-4 bottom-4 left-4 border border-violet/40" />
          <div className="relative aspect-[4/5] overflow-hidden border border-line bg-ink">
            <img
              src="/profile.jpg"
              alt="Dukee TheProgrammer"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
              <div>
                <p className="display text-2xl text-paper">Dukee</p>
                <p className="font-mono text-[10px] text-lilac tracking-wide">
                  dukee.dev
                </p>
              </div>
              <span className="w-2 h-2 bg-violet rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
