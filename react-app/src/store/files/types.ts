export type FileState = {
  [key in string]: {
    file_type: string
    content: string[]
  }
}

export const SET_FILES = 'SET_FILES'
export const CLEAR_FILES = 'CLEAR_FILES'

interface SetFilesAction {
  type: typeof SET_FILES
  newFiles: FileState
}

interface ClearFilesAction {
  type: typeof CLEAR_FILES
}

export type FileActionTypes = SetFilesAction | ClearFilesAction
