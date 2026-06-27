import type { Command } from './types'

const registry = new Map<string, Command>()
const aliases = new Map<string, string>()

export function registerCommand(command: Command): void {
  registry.set(command.name, command)
  if (command.aliases) {
    for (const alias of command.aliases) {
      aliases.set(alias, command.name)
    }
  }
}

export function getCommand(name: string): Command | undefined {
  const resolved = aliases.get(name)
  return registry.get(resolved ?? name)
}

export function getAllCommands(): Command[] {
  return Array.from(registry.values())
}

export function registerAll(commands: Command[]): void {
  for (const cmd of commands) {
    registerCommand(cmd)
  }
}
