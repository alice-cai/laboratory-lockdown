import {
  SET_FILES,
  CLEAR_FILES,
  FileState,
  FileActionTypes,
} from './types'

const initialState: FileState = {}

export function fileReducer(state = initialState, action: FileActionTypes): FileState {
  switch (action.type) {
    case SET_FILES:
      return action.newFiles
    case CLEAR_FILES:
      return {}
    default:
      return state
  }
}
