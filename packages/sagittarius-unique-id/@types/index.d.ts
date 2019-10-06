export type TGeneratedIds = { [key: string]: number }
export type TUniqueId = (prefix?: string) => string

declare const uniqueId: TUniqueId

export default uniqueId
