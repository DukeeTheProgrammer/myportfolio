import type { Command, TerminalApi } from './types'

export const clear: Command = {
  name: 'clear',
  aliases: ['cls'],
  description: 'Clear the terminal screen',
  execute(_args: string[], api: TerminalApi) {
    api.clear()
  },
}
