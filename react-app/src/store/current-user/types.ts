export const USERS = [
  "r_fisher",
  "j_forrest",
  "v_chapman",
  "n_reyes",
  "d_harris",
  "e_freedman",
  "r_barrera",
  "y_hines",
  "a_emerson",
] as const

export type User = typeof USERS[number]
export type CurrentUserState = '' | User

export const SET_CURRENT_USER = 'SET_CURRENT_USER'

interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER
  newUser: User
}

export type CurrentUserActionTypes = SetCurrentUserAction
