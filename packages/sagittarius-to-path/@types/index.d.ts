/* eslint-disable @typescript-eslint/no-explicit-any */
export type TToPath = (path?: string) => (string | number)[]

declare const toPath: TToPath

export default toPath
