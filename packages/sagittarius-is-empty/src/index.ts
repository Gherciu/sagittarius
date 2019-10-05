import { TIsEmpty } from '../@types'

const isEmpty: TIsEmpty = arg => {
  if (Array.isArray(arg)) return !arg.length
  if (typeof arg === 'object') return !Object.keys(arg).length
  return !arg
}

export default isEmpty
