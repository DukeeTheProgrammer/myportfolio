import type { Command, TerminalApi } from './types'
import { getCommand, getAllCommands } from './registry'
import { colors, table } from '../utils/formatters'

export const help: Command = {
  name: 'help',
  aliases: ['ls', '?'],
  description: 'List all available commands',
  usage: 'help [command]',
  execute(args: string[], api: TerminalApi) {
    if (args.length > 0) {
      const cmd = getCommand(args[0])
      if (!cmd) {
        api.writeln(`${colors.red}Command not found: ${args[0]}${colors.reset}`)
        return
      }
      api.writeln(`${colors.bold}${cmd.name}${colors.reset}`)
      api.writeln(`  ${cmd.description}`)
      if (cmd.usage) api.writeln(`  Usage: ${cmd.usage}`)
      if (cmd.aliases?.length)
        api.writeln(`  Aliases: ${cmd.aliases.join(', ')}`)
      return
    }

    const cmds = getAllCommands()
    const rows = cmds.map((c) => [
      `${colors.green}${c.name}${colors.reset}`,
      c.description,
    ])
    api.writeln(
      `${colors.bold}Available Commands${colors.reset} (${cmds.length} total)\n`,
    )
    api.writeln(table(rows))
    api.writeln(
      `\n${colors.dim}Tip: use 'help <command>' for details on a specific command${colors.reset}`,
    )
  },
}
