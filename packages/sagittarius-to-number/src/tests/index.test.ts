import toNumber from '../index'

describe('toNumber', () => {
  it('should return a number indiferent what type of argument is provided', () => {
    expect(toNumber('')).toEqual(0)
    expect(toNumber(21)).toEqual(21)
    expect(toNumber('21')).toEqual(21)
    expect(toNumber(null)).toEqual(0)
    expect(toNumber('21px')).toEqual(21)
    expect(toNumber(false)).toEqual(0)
    expect(toNumber(true)).toEqual(0)
    expect(toNumber(0)).toEqual(0)
  })
})
