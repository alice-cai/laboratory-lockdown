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
