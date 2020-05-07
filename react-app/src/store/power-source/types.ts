export type PowerSourceState = {
  powerSource1On: boolean
  powerSource2On: boolean
}

export const TURN_OFF_POWER_SOURCE_1 = 'TURN_OFF_POWER_SOURCE_1'
export const TURN_OFF_POWER_SOURCE_2 = 'TURN_OFF_POWER_SOURCE_2'

interface TurnOffPowerSource1Action {
  type: typeof TURN_OFF_POWER_SOURCE_1
}

interface TurnOffPowerSource2Action {
  type: typeof TURN_OFF_POWER_SOURCE_2
}

export type PowerSourceActionTypes = TurnOffPowerSource1Action | TurnOffPowerSource2Action
