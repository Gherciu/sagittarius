import isEmpty from '../index'

describe('isEmpty', () => {
  it('should return true if provided values is empty', () => {
    expect(isEmpty('')).toBeTruthy()
    expect(isEmpty({})).toBeTruthy()
    expect(isEmpty([])).toBeTruthy()
  })
  it('should return false if provided values is not empty', () => {
    expect(isEmpty('21')).toBeFalsy()
    expect(isEmpty({ a: 21 })).toBeFalsy()
    expect(isEmpty([21])).toBeFalsy()
  })
})
