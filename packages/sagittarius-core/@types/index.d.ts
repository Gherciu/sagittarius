import { TRandom } from 'sagittarius-random'
import { TIsEmpty } from 'sagittarius-is-empty'

export interface Saggitarius {
  random: TRandom
  isEmpty: TIsEmpty
}

export const random: TRandom
export const isEmpty: TIsEmpty

declare const sagittarius: Saggitarius

export default sagittarius
