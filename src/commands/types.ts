export type Theme = 'green' | 'amber' | 'white' | 'matrix'

export interface TerminalApi {
  write(text: string): void
  writeln(text: string): void
  clear(): void
  setTheme(theme: Theme): void
}

export interface Command {
  name: string
  aliases?: string[]
  description: string
  usage?: string
  execute(args: string[], api: TerminalApi): Promise<void> | void
}
