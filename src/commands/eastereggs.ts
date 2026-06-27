import type { Command, TerminalApi } from './types'
import { colors } from '../utils/formatters'

export const sudocmd: Command = {
  name: 'sudo',
  description: 'Try to gain root privileges (spoiler: you won\'t)',
  execute(_args: string[], api: TerminalApi) {
    api.writeln(
      `${colors.red}${colors.bold}Permission denied.${colors.reset}`,
    )
    api.writeln(
      `${colors.dim}You're not in the sudoers file. This incident will be reported.${colors.reset}`,
    )
  },
}

export const rmcmd: Command = {
  name: 'rm',
  description: 'Remove files (safely neutered)',
  execute(args: string[], api: TerminalApi) {
    if (args.includes('-rf') && (args.includes('/') || args.includes('*'))) {
      api.writeln(
        `${colors.yellow}Nice try, cowboy. 🐴${colors.reset}`,
      )
      api.writeln(
        `${colors.dim}This system is read-only.${colors.reset}`,
      )
    } else {
      api.writeln(`${colors.red}rm: cannot remove: read-only filesystem${colors.reset}`)
    }
  },
}

export const vimcmd: Command = {
  name: 'vim',
  description: 'Launch vim',
  execute(_args: string[], api: TerminalApi) {
    api.writeln(`${colors.yellow}I use Neovim, actually. 🤓${colors.reset}`)
    api.writeln(
      `${colors.dim}But I respect your commitment to never exiting.${colors.reset}`,
    )
  },
}

export const exitcmd: Command = {
  name: 'exit',
  description: 'Try to leave',
  execute(_args: string[], api: TerminalApi) {
    api.writeln(
      `${colors.green}You can check out anytime you like,${colors.reset}`,
    )
    api.writeln(
      `${colors.green}but you can never leave.${colors.reset}`,
    )
  },
}

export const matrixcmd: Command = {
  name: 'matrix',
  description: 'Watch the Matrix rain',
  execute(_args: string[], api: TerminalApi) {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ'
    let interval: ReturnType<typeof setInterval> | null = null
    let running = true

    const writeCol = () => {
      if (!running) return
      const col = Math.floor(Math.random() * 60)
      const len = Math.floor(Math.random() * 10) + 5
      for (let i = 0; i < len; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const code = Math.random() > 0.8 ? '\x1b[37m' : '\x1b[32m'
        api.write(`\x1b[${col};${30 + i}H${code}${char}\x1b[0m`)
      }
    }

    api.clear()
    api.write('\x1b[?25l') // hide cursor

    interval = setInterval(writeCol, 100)

    setTimeout(() => {
      running = false
      if (interval) clearInterval(interval)
      api.write('\x1b[?25h\x1b[2J\x1b[H') // show cursor, clear
    }, 5000)
  },
}

export const pingcmd: Command = {
  name: 'ping',
  description: 'Ping a host',
  usage: 'ping [host]',
  execute(args: string[], api: TerminalApi) {
    const target = args[0] || 'localhost'
    api.writeln(`${colors.green}PING ${target} (127.0.0.1) 56(84) bytes of data.${colors.reset}`)
    api.writeln(`${colors.green}64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.042ms${colors.reset}`)
    api.writeln(`${colors.green}64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.038ms${colors.reset}`)
    api.writeln(`${colors.green}64 bytes from 127.0.0.1: icmp_seq=3 ttl=64 time=0.041ms${colors.reset}`)
    api.writeln('')
    api.writeln(
      `${colors.dim}--- ${target} ping statistics ---${colors.reset}`,
    )
    api.writeln(`${colors.dim}3 packets transmitted, 3 received, 0% packet loss, time 2ms${colors.reset}`)
  },
}

export const echocmd: Command = {
  name: 'echo',
  description: 'Echo back the given text',
  usage: 'echo <text>',
  execute(args: string[], api: TerminalApi) {
    if (args.length > 0) {
      // Simple flag handling
      const text = args
        .filter((a) => a !== '-n')
        .join(' ')
      api.writeln(text)
    }
  },
}

export const datecmd: Command = {
  name: 'date',
  description: 'Display the current date and time',
  execute(_args: string[], api: TerminalApi) {
    const now = new Date()
    api.writeln(
      now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
      }),
    )
  },
}

export const uptimecmd: Command = {
  name: 'uptime',
  description: 'Show how long the terminal session has been active',
  execute(_args: string[], api: TerminalApi) {
    const uptimeSeconds = Math.floor(
      (Date.now() - (window as any).__sessionStart) / 1000,
    )
    const hours = Math.floor(uptimeSeconds / 3600)
    const minutes = Math.floor((uptimeSeconds % 3600) / 60)
    const seconds = uptimeSeconds % 60

    api.writeln(
      `up ${hours > 0 ? `${hours} hours, ` : ''}${minutes} minutes, ${seconds} seconds`,
    )
  },
}

export const historycmd: Command = {
  name: 'history',
  description: 'Show command history',
  execute(_args: string[], api: TerminalApi) {
    const history: string[] = (window as any).__commandHistory || []
    if (history.length === 0) {
      api.writeln(`${colors.dim}No commands in history.${colors.reset}`)
      return
    }
    for (let i = 0; i < history.length; i++) {
      api.writeln(`  ${i + 1}  ${history[i]}`)
    }
  },
}
