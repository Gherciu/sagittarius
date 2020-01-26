/* eslint-disable no-plusplus, @typescript-eslint/no-var-requires, @typescript-eslint/ban-ts-ignore */
import { THas } from '../@types'

const toPath = require('sagittarius-to-path') // use require import to resolve import default issue in tests
const isEmpty = require('sagittarius-is-empty')

const has: THas = (arg = {}, path) => {
  if (arg && !isEmpty(arg)) {
    const arrayPath = toPath(path)
    let currentArg = arg
    let hasPathInArg = true

    for (let i = 0; i < arrayPath.length; i++) {
      // @ts-ignore
      currentArg = currentArg[arrayPath[i]]
      if (currentArg === undefined) {
        hasPathInArg = false
        break
      }
    }

    return hasPathInArg
  }
  return false
}

export default has
