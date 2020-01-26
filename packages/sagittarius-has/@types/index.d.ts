/* eslint-disable @typescript-eslint/no-explicit-any */
export type THas = (arg?: any[] | object | any, path?: string) => boolean

declare const has: THas

export default has
