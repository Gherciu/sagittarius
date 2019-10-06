import { TUniqueId } from 'sagittarius-unique-id'
import { TRandom } from 'sagittarius-random'
import { TIsEmpty } from 'sagittarius-is-empty'

export interface Saggitarius {
  random: TRandom
  isEmpty: TIsEmpty
  uniqueId: TUniqueId
}

export const random: TRandom
export const isEmpty: TIsEmpty
export const uniqueId: TUniqueId

declare const sagittarius: Saggitarius

export default sagittarius
