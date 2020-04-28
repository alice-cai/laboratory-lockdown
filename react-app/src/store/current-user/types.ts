export type CurrentUserState = string // TODO: this should technically be keyof the user info obj

export const SET_CURRENT_USER = 'SET_CURRENT_USER'

interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER
  newUser: string
}

export type CurrentUserActionTypes = SetCurrentUserAction // | ClearTerminalHistoryAction
