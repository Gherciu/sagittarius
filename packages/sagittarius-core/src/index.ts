import random from 'sagittarius-random'
import isEmpty from 'sagittarius-is-empty'
import uniqueId from 'sagittarius-unique-id'
import { Saggitarius } from '../@types'

const sagittarius: Saggitarius = {
  random,
  isEmpty,
  uniqueId,
}

export { random, isEmpty, uniqueId }
export default sagittarius
