import uniqueId from '../index'

describe('uniqueId', () => {
  it('each time when this fn is called should return an unique non prefixed id if prefix is not provided', () => {
    const generatedIds = [uniqueId(), uniqueId(), uniqueId()]

    expect(generatedIds).toEqual(['1', '2', '3'])
  })

  it('each time when this fn is called should return an unique prefixed id if prefix is provided', () => {
    const generatedIds = [
      uniqueId('prefix_'),
      uniqueId('prefix_'),
      uniqueId('prefix_'),
    ]

    expect(generatedIds).toEqual(['prefix_1', 'prefix_2', 'prefix_3'])
  })
})
