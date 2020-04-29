import {
  CurrentImageState,
  SET_CURRENT_IMAGE,
  CurrentImageActionTypes,
} from './types'

const initialState: CurrentImageState = ''

export function currentImageReducer(state = initialState, action: CurrentImageActionTypes): CurrentImageState {
  switch (action.type) {
    case SET_CURRENT_IMAGE:
      return action.imageFileName
    default:
      return state
  }
}
