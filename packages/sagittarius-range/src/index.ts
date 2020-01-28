import { TRange } from '../@types'

const range: TRange = (start, end, step = 1) => {
  // only start is provided
  if (end === undefined) {
    const arrayLength = Math.abs(start)
    const stepToIncrement = start < 0 ? -step : step
    return Array.from({ length: arrayLength }).map((_, index) =>
      index !== 0 ? index * stepToIncrement : index,
    )
  }

  const startWith = Math.min(Math.abs(start), Math.abs(end))
  const endWith = Math.max(Math.abs(start), Math.abs(end))
  const stepToIncrement = (start < 0 || end < 0) && step > 0 ? -step : step
  const arrayLength = (endWith - startWith) / (Math.abs(stepToIncrement) || 1) // because division by "0" doesnt make sense and throw an error
  return Array.from({ length: arrayLength }).map((_, index) => {
    if (step === 0) return start
    return index !== 0
      ? (index + startWith) * stepToIncrement
      : index + startWith
  })
}

export default range
