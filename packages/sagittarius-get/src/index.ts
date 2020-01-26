/* eslint-disable no-plusplus, @typescript-eslint/no-var-requires, @typescript-eslint/ban-ts-ignore */
import { TGet } from '../@types'

const toPath = require('sagittarius-to-path') // use require import to resolve import default issue in tests

const get: TGet = (arg, path, defaultValue = undefined) => {
  if (!path) return defaultValue
  const arrayPath = toPath(path)
  let currentArg = arg

  for (let i = 0; i < arrayPath.length; i++) {
    // @ts-ignore
    currentArg = currentArg[arrayPath[i]]
    if (currentArg === undefined) break
  }

  return currentArg === undefined ? defaultValue : currentArg
}

export default get
