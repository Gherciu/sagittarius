import { TIsEmpty } from '../@types'

const isEmpty: TIsEmpty = arg => {
  if (Array.isArray(arg)) return Boolean(arg.length)
  if (typeof arg === 'object') return Boolean(Object.keys(arg).length)
  return Boolean(arg)
}

export default isEmpty
