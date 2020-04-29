import {
  SET_CURRENT_IMAGE,
  CurrentImageTypes,
} from './types'

export function setCurrentImage(imageFileName: string): CurrentImageTypes {
  return {
    type: SET_CURRENT_IMAGE,
    imageFileName,
  }
}
