export type CurrentImageState = string // name of image file

export const SET_CURRENT_IMAGE = 'SET_CURRENT_IMAGE'

interface SetCurrentImageAction {
  type: typeof SET_CURRENT_IMAGE
  imageFileName: string
}

export type CurrentImageActionTypes = SetCurrentImageAction // | ClearTerminalHistoryAction
