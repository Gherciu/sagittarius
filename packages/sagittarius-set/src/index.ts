/* eslint-disable no-plusplus, @typescript-eslint/no-var-requires, @typescript-eslint/ban-ts-ignore, no-param-reassign */
import { TSet } from '../@types'

const toPath = require('sagittarius-to-path') // use require import to resolve import default issue in tests

const set: TSet = (arg, path, value = undefined) => {
  if (!path) return false
  let currentArg = arg // a moving reference to internal objects within obj
  const arrayPath = toPath(path)
  const arrayPathLength = arrayPath.length

  for (let i = 0; i < arrayPathLength - 1; i++) {
    const currentPathPart = arrayPath[i]
    if (currentArg[currentPathPart] === undefined)
      currentArg[currentPathPart] = {}
    currentArg = currentArg[currentPathPart]
  }

  currentArg[arrayPath[arrayPathLength - 1]] = value
  return true
}

export default set
