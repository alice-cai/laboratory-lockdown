import {
  SET_COMMANDS,
  CommandActionTypes,
} from './types'

export function setCommands(newCommands: {[key in string]: string}): CommandActionTypes {
  return {
    type: SET_COMMANDS,
    newCommands,
  }
}
