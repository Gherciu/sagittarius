export interface DebouncedFunction {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  (args?: any): any
  cancel: Function
}

export type TDebounce = (
  funcToCall: Function,
  wait: number,
) => DebouncedFunction

declare const debounce: TDebounce

export default debounce
