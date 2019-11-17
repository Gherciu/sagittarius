import { TUniqueId } from 'sagittarius-unique-id'
import { TRandom } from 'sagittarius-random'
import { TIsEmpty } from 'sagittarius-is-empty'
import { TToNumber } from 'sagittarius-to-number'
import { TDebounce } from 'sagittarius-debounce'

export interface Saggitarius {
  random: TRandom
  isEmpty: TIsEmpty
  uniqueId: TUniqueId
  toNumber: TToNumber
  debounce: TDebounce
}

export const random: TRandom
export const isEmpty: TIsEmpty
export const uniqueId: TUniqueId
export const toNumber: TToNumber
export const debounce: TDebounce

declare const sagittarius: Saggitarius

export default sagittarius
