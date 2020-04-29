import {
  SET_CURRENT_IMAGE,
  CurrentImageActionTypes,
} from './types'

export function setCurrentImage(imageFileName: string): CurrentImageActionTypes {
  return {
    type: SET_CURRENT_IMAGE,
    imageFileName,
  }
}
