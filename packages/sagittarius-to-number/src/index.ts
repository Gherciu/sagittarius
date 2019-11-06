import { TToNumber } from '../@types'

const toNumber: TToNumber = arg => {
  if (typeof arg === 'string') return Number(arg.replace(/\D/g, ''))
  if (!arg) return 0
  if (Array.isArray(arg)) return 0
  if (typeof arg === 'object') return 0
  if (typeof arg === 'boolean') return 0
  return arg
}

export default toNumber
