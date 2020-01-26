/* eslint-disable @typescript-eslint/no-explicit-any */
export type TGet = (
  arg?: any[] | object | any,
  path?: string,
  defaultValue?: any,
) => any

declare const get: TGet

export default get
