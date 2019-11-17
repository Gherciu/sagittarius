import random from 'sagittarius-random'
import isEmpty from 'sagittarius-is-empty'
import uniqueId from 'sagittarius-unique-id'
import toNumber from 'sagittarius-to-number'
import debounce from 'sagittarius-debounce'
import { Saggitarius } from '../@types'

const sagittarius: Saggitarius = {
  random,
  isEmpty,
  uniqueId,
  toNumber,
  debounce,
}

export { random, isEmpty, uniqueId, toNumber, debounce }
export default sagittarius
