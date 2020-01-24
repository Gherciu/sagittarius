import { TUniq } from '../@types'

const uniq: TUniq = (arg = []) => {
  const stringifyedArg = arg.map(value => JSON.stringify(value))
  return arg.filter((value, index, self) => {
    if (typeof value === 'object')
      return stringifyedArg.indexOf(JSON.stringify(value)) === index
    return self.indexOf(value) === index
  })
}

export default uniq
