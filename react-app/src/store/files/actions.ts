import {
  SET_FILES,
  CLEAR_FILES,
  FileState,
  FileActionTypes,
} from './types'

export function setFiles(newFiles: FileState): FileActionTypes {
  return {
    type: SET_FILES,
    newFiles,
  }
}

export function clearFiles(): FileActionTypes {
  return {
    type: CLEAR_FILES,
  }
}
