import { TUniq } from 'sagittarius-uniq'
import { TUniqueId } from 'sagittarius-unique-id'
import { TRandom } from 'sagittarius-random'
import { TIsEmpty } from 'sagittarius-is-empty'
import { TToNumber } from 'sagittarius-to-number'
import { TDebounce } from 'sagittarius-debounce'
import { TToPath } from 'sagittarius-to-path'
import { THas } from 'sagittarius-has'
import { TGet } from 'sagittarius-get'
import { TSet } from 'sagittarius-set'

export interface Saggitarius {
  random: TRandom
  isEmpty: TIsEmpty
  uniqueId: TUniqueId
  toNumber: TToNumber
  debounce: TDebounce
  uniq: TUniq
  toPath: TToPath
  has: THas
  get: TGet
  set: TSet
}

export const random: TRandom
export const isEmpty: TIsEmpty
export const uniqueId: TUniqueId
export const toNumber: TToNumber
export const debounce: TDebounce
export const uniq: TUniq
export const toPath: TToPath
export const has: THas
export const get: TGet
export const set: TSet

declare const sagittarius: Saggitarius

export default sagittarius
