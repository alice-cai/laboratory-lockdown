import {
  CurrentImageState,
  SET_CURRENT_IMAGE,
  CurrentImageTypes,
} from './types'

const initialState: CurrentImageState = ''

export function currentImageReducer(state = initialState, action: CurrentImageTypes): CurrentImageState {
  switch (action.type) {
    case SET_CURRENT_IMAGE:
      return action.imageFileName
    default:
      return state
  }
}
