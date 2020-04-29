export type CurrentCommandsState = { [key in string]: string }

export const SET_COMMANDS = 'SET_COMMANDS'

interface SetCommandsAction {
  type: typeof SET_COMMANDS
  newCommands: { [key in string]: string }
}

export type CommandActionTypes = SetCommandsAction // | ClearTerminalHistoryAction
