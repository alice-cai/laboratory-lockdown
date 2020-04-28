import {
  SET_CURRENT_USER,
  CurrentUserActionTypes,
} from './types'

export function setCurrentUser(newUser: string): CurrentUserActionTypes {
  return {
    type: SET_CURRENT_USER,
    newUser,
  }
}
