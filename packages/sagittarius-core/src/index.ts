import random from 'sagittarius-random'
import isEmpty from 'sagittarius-is-empty'
import uniqueId from 'sagittarius-unique-id'
import toNumber from 'sagittarius-to-number'
import debounce from 'sagittarius-debounce'
import uniq from 'sagittarius-uniq'
import toPath from 'sagittarius-to-path'
import has from 'sagittarius-has'
import get from 'sagittarius-get'
import set from 'sagittarius-set'
import { Saggitarius } from '../@types'

const sagittarius: Saggitarius = {
  random,
  isEmpty,
  uniqueId,
  toNumber,
  debounce,
  uniq,
  toPath,
  has,
  get,
  set,
}

export {
  random,
  isEmpty,
  uniqueId,
  toNumber,
  debounce,
  uniq,
  toPath,
  has,
  get,
  set,
}
export default sagittarius
