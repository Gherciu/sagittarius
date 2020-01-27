/* eslint-disable no-prototype-builtins, @typescript-eslint/ban-ts-ignore, no-plusplus */
import { TDifference } from '../@types'

const difference: TDifference = (arg, argToCompare) => {
  if (
    (Array.isArray(arg) && !Array.isArray(argToCompare)) ||
    typeof arg !== typeof argToCompare
  ) {
    // is args has different types return arg as is
    return arg
  }

  if (Array.isArray(arg)) {
    return arg.filter(value => {
      return !argToCompare.includes(value)
    })
  }

  if (typeof arg === 'object') {
    const diff = {}
    Object.keys(arg).forEach(key => {
      if (!argToCompare.hasOwnProperty(key) || argToCompare[key] !== arg[key]) {
        // @ts-ignore
        diff[key] = arg[key]
      }
    })
    return diff
  }

  if (typeof arg === 'string') {
    let startCutArgFromIndex = 0
    const splitedArg = arg.split('')
    const splitedArgToCompare = argToCompare.split('')

    for (let i = 0; i < splitedArg.length; i++) {
      if (splitedArgToCompare[i] !== splitedArg[i]) {
        startCutArgFromIndex = i
        break
      }
    }

    return startCutArgFromIndex > 0 ? arg.substr(startCutArgFromIndex) : ''
  }

  // if type is unhandled return value as is
  return arg
}

export default difference
