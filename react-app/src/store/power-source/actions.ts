import { AnyAction } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import {
  TURN_OFF_POWER_SOURCE_1,
  TURN_OFF_POWER_SOURCE_2,
  PowerSourceActionTypes,
} from './types'
import { User } from '../current-user/types'
import { AppState } from '../..'

export function turnOffPowerSource1(): PowerSourceActionTypes {
  return {
    type: TURN_OFF_POWER_SOURCE_1,
  }
}

export function turnOffPowerSource2(): PowerSourceActionTypes {
  return {
    type: TURN_OFF_POWER_SOURCE_2,
  }
}

export function turnOffPowerSourceByUser(user: User): ThunkAction<void, AppState, null, AnyAction> {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    switch (user) {
      case 'y_hines':
        dispatch(turnOffPowerSource1())
        return
      case 'a_emerson':
        dispatch(turnOffPowerSource2())
        return
    }
  }
}
