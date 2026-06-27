import type { Command, TerminalApi } from './types'
import { NEOFETCH_ART } from '../utils/ascii'
import { colors } from '../utils/formatters'

export const neofetch: Command = {
  name: 'neofetch',
  aliases: ['info', 'sysinfo'],
  description: 'Display system-info style profile',
  execute(_args: string[], api: TerminalApi) {
    const lines = NEOFETCH_ART.split('\n')
    const info = [
      `${colors.bold}${colors.green}DukeeTheProgrammer${colors.reset}`,
      `${colors.dim}----------------------${colors.reset}`,
      `${colors.bold}OS:${colors.reset} Arch Linux x86_64`,
      `${colors.bold}Host:${colors.reset} Human`,
      `${colors.bold}Kernel:${colors.reset} 6.x.x-arch1-1`,
      `${colors.bold}Uptime:${colors.reset} Quite a while`,
      `${colors.bold}Shell:${colors.reset} bash 5.2.x`,
      `${colors.bold}Editor:${colors.reset} Neovim 0.10.x`,
      `${colors.bold}Languages:${colors.reset} TypeScript, Python, JavaScript, SQL`,
      `${colors.bold}DE:${colors.reset} Sway (Wayland)`,
      `${colors.bold}Terminal:${colors.reset} This one! 😄`,
    ]

    const maxLines = Math.max(lines.length, info.length)
    for (let i = 0; i < maxLines; i++) {
      const art = lines[i] || ''
      const infoLine = info[i] || ''
      api.writeln(`${art}    ${infoLine}`)
    }
  },
}
