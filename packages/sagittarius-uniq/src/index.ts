import { TUniq } from '../@types'

const uniq: TUniq = (arg = []) => {
  const stringifyedArg = arg.map(value => JSON.stringify(value))
  return arg.filter((value, index) => {
    return stringifyedArg.indexOf(JSON.stringify(value)) === index
  })
}

export default uniq
