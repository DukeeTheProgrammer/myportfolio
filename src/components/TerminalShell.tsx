import { useEffect, useRef } from 'react'
import { Terminal } from 'xterm'
import type { ITheme } from 'xterm'
import type { TerminalApi, Theme } from '../commands/types'
import { getCommand, getAllCommands } from '../commands/registry'
import { registerAll } from '../commands/registry'
import { help } from '../commands/help'
import { whoami } from '../commands/whoami'
import { banner } from '../commands/banner'
import { clear } from '../commands/clear'
import { skills } from '../commands/skills'
import { projects } from '../commands/projects'
import { project } from '../commands/project'
import { experience } from '../commands/experience'
import { contact } from '../commands/contact'
import { theme } from '../commands/theme'
import { neofetch } from '../commands/neofetch'
import {
  sudocmd,
  rmcmd,
  vimcmd,
  exitcmd,
  matrixcmd,
  pingcmd,
  echocmd,
  datecmd,
  uptimecmd,
  historycmd,
} from '../commands/eastereggs'
import 'xterm/css/xterm.css'

registerAll([
  help,
  whoami,
  banner,
  clear,
  skills,
  projects,
  project,
  experience,
  contact,
  theme,
  neofetch,
  sudocmd,
  rmcmd,
  vimcmd,
  exitcmd,
  matrixcmd,
  pingcmd,
  echocmd,
  datecmd,
  uptimecmd,
  historycmd,
])

const THEMES: Record<Theme, ITheme> = {
  green: {
    background: '#0d1117',
    foreground: '#00ff41',
    cursor: '#00ff41',
    selectionBackground: '#00ff4133',
    black: '#000000',
    red: '#ff3355',
    green: '#00ff41',
    yellow: '#ffcc00',
    blue: '#3399ff',
    magenta: '#cc66ff',
    cyan: '#33ffff',
    white: '#cccccc',
    brightBlack: '#555555',
    brightRed: '#ff5577',
    brightGreen: '#33ff66',
    brightYellow: '#ffdd33',
    brightBlue: '#55aaff',
    brightMagenta: '#dd77ff',
    brightCyan: '#55ffff',
    brightWhite: '#ffffff',
  },
  amber: {
    background: '#1a0f00',
    foreground: '#ffb000',
    cursor: '#ffb000',
    selectionBackground: '#ffb00033',
    black: '#000000',
    red: '#cc4400',
    green: '#ffb000',
    yellow: '#ffcc44',
    blue: '#ff8800',
    magenta: '#cc6600',
    cyan: '#ffaa22',
    white: '#ffdd99',
    brightBlack: '#553311',
    brightRed: '#dd5500',
    brightGreen: '#ffbb22',
    brightYellow: '#ffdd66',
    brightBlue: '#ff9922',
    brightMagenta: '#dd7722',
    brightCyan: '#ffbb44',
    brightWhite: '#ffeecc',
  },
  white: {
    background: '#1e1e2e',
    foreground: '#cdd6f4',
    cursor: '#cdd6f4',
    selectionBackground: '#cdd6f433',
    black: '#45475a',
    red: '#f38ba8',
    green: '#a6e3a1',
    yellow: '#f9e2af',
    blue: '#89b4fa',
    magenta: '#f5c2e7',
    cyan: '#94e2d5',
    white: '#bac2de',
    brightBlack: '#585b70',
    brightRed: '#f38ba8',
    brightGreen: '#a6e3a1',
    brightYellow: '#f9e2af',
    brightBlue: '#89b4fa',
    brightMagenta: '#f5c2e7',
    brightCyan: '#94e2d5',
    brightWhite: '#a6adc8',
  },
  matrix: {
    background: '#000000',
    foreground: '#00cc00',
    cursor: '#00cc00',
    selectionBackground: '#00cc0033',
    black: '#000000',
    red: '#003300',
    green: '#00cc00',
    yellow: '#33ff33',
    blue: '#006600',
    magenta: '#009900',
    cyan: '#00ff00',
    white: '#99ff99',
    brightBlack: '#003300',
    brightRed: '#006600',
    brightGreen: '#00ff00',
    brightYellow: '#66ff66',
    brightBlue: '#009900',
    brightMagenta: '#00cc00',
    brightCyan: '#33ff33',
    brightWhite: '#ccffcc',
  },
}

let currentTheme: Theme = 'green'

function getThemeConfig(theme: Theme) {
  return THEMES[theme]
}

;(window as any).__sessionStart = Date.now()
;(window as any).__commandHistory = []

export default function TerminalShell() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const term = new Terminal({
      cursorBlink: true,
      cursorStyle: 'block',
      fontSize: 13,
      fontFamily:
        '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
      theme: getThemeConfig(currentTheme),
      allowTransparency: true,
      convertEol: true,
      scrollback: 500,
    })

    term.open(container)

    const api: TerminalApi = {
      write: (text: string) => term.write(text),
      writeln: (text: string) => term.writeln(text),
      clear: () => term.clear(),
      setTheme: (theme: Theme) => {
        currentTheme = theme
        term.options.theme = getThemeConfig(theme)
        term.focus()
      },
    }

    let currentLine = ''
    const history: string[] = []
    let historyIndex = -1

    const PROMPT = '\x1b[32mdukee@portfolio\x1b[0m:\x1b[34m~\x1b[0m$ '

    const writePrompt = () => term.write(PROMPT)

    const executeCommand = async (input: string) => {
      const parts = input.match(/(?:[^\s"']+|["'][^"']*["'])+/g) || []
      const cmdName = parts[0]?.toLowerCase() || ''
      const cmdArgs = parts.slice(1)

      if (cmdName) {
        history.push(input)
        ;(window as any).__commandHistory = history

        const cmd = getCommand(cmdName)
        if (cmd) {
          try {
            await cmd.execute(cmdArgs, api)
          } catch (err) {
            term.writeln(
              `\x1b[31mError: ${err instanceof Error ? err.message : String(err)}\x1b[0m`,
            )
          }
        } else {
          term.writeln(`\x1b[31mCommand not found: ${cmdName}\x1b[0m`)
          term.writeln(`\x1b[2mType 'help' for available commands.\x1b[0m`)
        }
      }
    }

    writePrompt()

    term.onData((data) => {
      const code = data.charCodeAt(0)

      if (code === 13) {
        term.write('\r\n')
        const cmd = currentLine.trim()
        currentLine = ''
        historyIndex = -1

        if (cmd) {
          executeCommand(cmd).then(() => {
            term.write('\r\n')
            writePrompt()
            term.focus()
          })
        } else {
          writePrompt()
        }
      } else if (code === 127) {
        if (currentLine.length > 0) {
          currentLine = currentLine.slice(0, -1)
          term.write('\b \b')
        }
      } else if (code === 9) {
        const names = getAllCommands().map((c) => c.name)
        const aliases = getAllCommands().flatMap((c) => c.aliases || [])
        const all = [...names, ...aliases]
        const matches = all.filter((n) => n.startsWith(currentLine))
        if (matches.length === 1) {
          currentLine = matches[0]
          term.write('\r\x1b[K')
          writePrompt()
          term.write(currentLine)
        }
      } else if (code === 27) {
        if (data === '\x1b[A') {
          if (history.length > 0) {
            if (historyIndex === -1) historyIndex = history.length - 1
            else historyIndex = Math.max(0, historyIndex - 1)
            currentLine = history[historyIndex]
            term.write('\r\x1b[K')
            writePrompt()
            term.write(currentLine)
          }
        } else if (data === '\x1b[B') {
          if (historyIndex !== -1) {
            historyIndex++
            if (historyIndex >= history.length) {
              historyIndex = -1
              currentLine = ''
            } else {
              currentLine = history[historyIndex]
            }
            term.write('\r\x1b[K')
            writePrompt()
            term.write(currentLine)
          }
        }
      } else if (code === 12) {
        term.clear()
        writePrompt()
        term.write(currentLine)
      } else if (data.length === 1 && code >= 32) {
        currentLine += data
        term.write(data)
      }
    })

    const ro = new ResizeObserver(() => {
      const parent = container.parentElement
      if (parent) {
        try {
          term.resize(
            Math.floor(parent.clientWidth / 9.2),
            Math.floor(parent.clientHeight / 20),
          )
        } catch {}
      }
    })
    ro.observe(container.parentElement || container)

    term.focus()

    return () => {
      ro.disconnect()
      term.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-hidden"
    />
  )
}
