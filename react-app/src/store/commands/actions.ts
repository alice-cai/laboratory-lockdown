import { AnyAction } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AppState } from '../..'
import {
  SET_COMMANDS,
  Command,
  CommandActionTypes,
} from './types'

export function setCommands(newCommands: {[key in Command]: string}): CommandActionTypes {
  return {
    type: SET_COMMANDS,
    newCommands,
  }
}

export function initDefaultCommands(): ThunkAction<void, AppState, null, AnyAction>  {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {

    fetch('/commands?type=logged_out')
      .then(response => response.text())
      .then(response => {
        const defaultCommands = JSON.parse(response)
        dispatch(setCommands(defaultCommands))
      })
      .catch((error) => console.error(`Error fetching default commands: ${error}`))
  }
}
