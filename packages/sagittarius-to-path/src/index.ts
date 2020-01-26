import { TToPath } from '../@types'
/* eslint-disable @typescript-eslint/no-var-requires */
const toNumber = require('sagittarius-to-number') // use require import to resolve import default issue in tests

const toPath: TToPath = path => {
  if (path && typeof path === 'string')
    return path
      .replace(/\[/gi, '.') // to transform [0][0] into .0].0]
      .split('.')
      .filter(value => (typeof value === 'string' ? value : true)) // filter '' empty entries after spliting
      .map(value => {
        if (/\]/gi.test(value)) return toNumber(value) // to transfrom .0].0] into [0, 0]
        return value
      })
  return []
}

export default toPath
