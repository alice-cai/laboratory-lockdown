import {
    CurrentCommandsState,
    SET_COMMANDS,
    CommandActionTypes,
  } from './types'
  
  const initialState: CurrentCommandsState = {}
  
  export function commandReducer(state = initialState, action: CommandActionTypes): CurrentCommandsState {
    switch (action.type) {
      case SET_COMMANDS:
        return action.newCommands
      default:
        return state
    }
  }
  