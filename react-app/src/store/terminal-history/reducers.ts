import { List } from 'immutable'
import {
  ADD_TERMINAL_HISTORY_ENTRIES,
  CLEAR_TERMINAL_HISTORY,
  TerminalHistoryActionTypes,
  TerminalHistoryState,
} from './types'

const initialState: TerminalHistoryState = List()

export function terminalHistoryReducer(state = initialState, action: TerminalHistoryActionTypes): TerminalHistoryState {
  switch (action.type) {
    case ADD_TERMINAL_HISTORY_ENTRIES:
      return state.concat(action.payload)
    case CLEAR_TERMINAL_HISTORY:
      return initialState
    default:
      return state
  }
}
