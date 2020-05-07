import {
  TURN_OFF_POWER_SOURCE_1,
  TURN_OFF_POWER_SOURCE_2,
  PowerSourceState,
  PowerSourceActionTypes,
} from './types'

const initialState: PowerSourceState = {
  powerSource1On: true,
  powerSource2On: true,
}

export function powerSourceReducer(state = initialState, action: PowerSourceActionTypes): PowerSourceState {
  switch (action.type) {
    case TURN_OFF_POWER_SOURCE_1:
      return { ...state, powerSource1On: false }
    case TURN_OFF_POWER_SOURCE_2:
      return { ...state, powerSource2On: false }
    default:
      return state
  }
}
