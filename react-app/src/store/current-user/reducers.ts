import {
    CurrentUserState,
    SET_CURRENT_USER,
  CurrentUserActionTypes,
} from './types'

const initialState: CurrentUserState = ''

export function currentUserReducer(state = initialState, action: CurrentUserActionTypes): CurrentUserState {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.newUser
    default:
      return state
  }
}
