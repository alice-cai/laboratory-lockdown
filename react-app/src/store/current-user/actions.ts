import { AnyAction } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import {
  SET_CURRENT_USER,
  CurrentUserActionTypes,
  User,
} from './types'
import { AppState } from '../..'
import { setCommands } from '../commands/actions'
import { setFiles } from '../files/actions'
import { FileState } from '../files/types'

export function setCurrentUser(newUser: User): CurrentUserActionTypes {
  return {
    type: SET_CURRENT_USER,
    newUser,
  }
}

export function switchUser(user: string): ThunkAction<void, AppState, null, AnyAction> {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {

    // Fetch commands for new user
    fetch(`/commands?type=logged_in`)
      .then(response => response.text())
      .then(response => {
        dispatch(setCommands(JSON.parse(response)))
      })
      .catch((error) => console.error(`Error fetching commands for user ${user}: ${error}`))

    // Fetch files for new user
    fetch(`/files?user_name=${user}`)
      .then(response => response.text())
      .then(response => {
        dispatch(setFiles(JSON.parse(response) as FileState))
      })
      .catch((error) => console.error(`Error fetching files for user ${user}: ${error}`))

    dispatch(setCurrentUser(user as User))
  }
}
