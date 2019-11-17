import { TDebounce } from '../@types'

const debounce: TDebounce = (funcToCall, wait) => {
  let timeoutId: number
  const cancelTimeout = (): void => {
    if (timeoutId) clearTimeout(timeoutId)
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const debounced = (...args: any[]): void => {
    cancelTimeout()
    timeoutId = setTimeout(funcToCall, wait, ...args)
  }

  debounced.cancel = cancelTimeout
  return debounced
}

export default debounce
