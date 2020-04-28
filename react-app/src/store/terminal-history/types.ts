import { List } from 'immutable'

export type TerminalHistoryEntry = {
  type: 'command'
  value: string
} | {
  type: 'output',
  value: string[]
}

export type TerminalHistoryState = List<TerminalHistoryEntry>

export const ADD_TERMINAL_HISTORY_ENTRIES = 'ADD_TERMINAL_HISTORY_ENTRIES'
export const CLEAR_TERMINAL_HISTORY = 'CLEAR_TERMINAL_HISTORY'

interface AddHistoryEntriesAction {
  type: typeof ADD_TERMINAL_HISTORY_ENTRIES
  payload: TerminalHistoryEntry[]
}

interface ClearTerminalHistoryAction {
  type: typeof CLEAR_TERMINAL_HISTORY
}

export type TerminalHistoryActionTypes = AddHistoryEntriesAction | ClearTerminalHistoryAction
