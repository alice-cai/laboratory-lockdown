export type Command = 'ls' | 'cat' | 'ssh' | 'map' | 'help' | 'power'
export type CurrentCommandsState = { [key in Command]: string } | {}

export const SET_COMMANDS = 'SET_COMMANDS'

interface SetCommandsAction {
  type: typeof SET_COMMANDS
  newCommands: { [key in Command]: string }
}

export type CommandActionTypes = SetCommandsAction // | ClearTerminalHistoryAction
