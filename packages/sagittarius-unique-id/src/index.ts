import { TUniqueId, TGeneratedIds } from '../@types'

const generatedIds: TGeneratedIds = {}

const uniqueId: TUniqueId = (prefix = 'sagittarius') => {
  if (!generatedIds[prefix]) generatedIds[prefix] = 0
  generatedIds[prefix] += 1
  return `${prefix === 'sagittarius' ? '' : prefix}${generatedIds[prefix]}`
}

export default uniqueId
