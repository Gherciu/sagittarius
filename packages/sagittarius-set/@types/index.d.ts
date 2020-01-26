/* eslint-disable @typescript-eslint/no-explicit-any */
export type TSet = (
  arg?: any[] | object | any,
  path?: string,
  value?: any,
) => boolean

declare const set: TSet

export default set
