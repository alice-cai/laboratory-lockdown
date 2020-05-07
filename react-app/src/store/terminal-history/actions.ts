import {
  TerminalHistoryEntry,
  ADD_TERMINAL_HISTORY_ENTRIES,
  CLEAR_TERMINAL_HISTORY,
  TerminalHistoryActionTypes,
} from './types'

// TypeScript infers that this function is returning AddHistoryEntriesAction
export function addTerminalHistoryEntries(newEntries: TerminalHistoryEntry[]): TerminalHistoryActionTypes {
  return {
    type: ADD_TERMINAL_HISTORY_ENTRIES,
    payload: newEntries,
  }
}

// TypeScript infers that this function is returning ClearTerminalHistoryAction
export function clearTerminalHistory(): TerminalHistoryActionTypes {
  return {
    type: CLEAR_TERMINAL_HISTORY,
  }
}
