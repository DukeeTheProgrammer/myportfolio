export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00ff41]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#3399ff]/5 rounded-full blur-3xl pointer-events-none" />

      {/* ASCII Banner */}
      <pre className="text-[10px] sm:text-[12px] md:text-[14px] leading-tight text-center text-[#00ff41] select-none">
        {`
  ██████╗ ██╗   ██╗██╗  ██╗███████╗███████╗
  ██╔══██╗██║   ██║██║ ██╔╝██╔════╝██╔════╝
  ██║  ██║██║   ██║█████╔╝ █████╗  █████╗  
  ██║  ██║██║   ██║██╔═██╗ ██╔══╝  ██╔══╝  
  ██████╔╝╚██████╔╝██║  ██╗███████╗███████╗
  ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝
        `}
      </pre>
      <pre className="text-[8px] sm:text-[10px] md:text-[12px] leading-tight text-center text-[#3399ff] select-none mt-[-1rem]">
        {`
  ████████╗██╗  ██╗███████╗██████╗ ██████╗  ██████╗  ██████╗ ██████╗  █████╗ ███╗   ███╗██████╗ ███████╗██████╗
  ╚══██╔══╝██║  ██║██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔════╝ ██╔══██╗██╔══██╗████╗ ████║██╔══██╗██╔════╝██╔══██╗
     ██║   ███████║█████╗  ██████╔╝██████╔╝██║   ██║██║  ███╗██████╔╝███████║██╔████╔██║██████╔╝█████╗  ██████╔╝
     ██║   ██╔══██║██╔══╝  ██╔═══╝ ██╔══██╗██║   ██║██║   ██║██╔══██╗██╔══██║██║╚██╔╝██║██╔══██╗██╔══╝  ██╔══██╗
     ██║   ██║  ██║███████╗██║     ██║  ██║╚██████╔╝╚██████╔╝██║  ██║██║  ██║██║ ╚═╝ ██║██████╔╝███████╗██║  ██║
     ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝
        `}
      </pre>

      <p className="mt-8 text-gray-400 font-mono text-sm md:text-base text-center max-w-xl">
        Full-stack developer who builds things for the web.
        <br />
        <span className="text-[#00ff41]">
          Type `help` in the terminal below to explore.
        </span>
      </p>

      <div className="mt-10 flex flex-col items-center gap-2">
        <span className="text-gray-500 font-mono text-xs animate-bounce">▼</span>
        <span className="text-gray-500 font-mono text-xs">scroll down</span>
      </div>
    </section>
  )
}
