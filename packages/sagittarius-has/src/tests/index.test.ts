import has from '../index'

describe('has', () => {
  it('should return false if provided arg is not an object or array', () => {
    expect(has()).toBeFalsy()
    expect(has(undefined)).toBeFalsy()
  })

  it('should return false if path is not a direct property of an object or array', () => {
    expect(has({ a: 21 }, 'b')).toBeFalsy()
    expect(has([21], '[1]')).toBeFalsy()
    expect(has([{ a: [21] }], '[0].a[1]')).toBeFalsy()
    expect(has([{ a: [21, { a: [21] }] }], '[0].a[2].a[0]')).toBeFalsy()
  })

  it('should return true if path is a direct property of an object or array', () => {
    expect(has({ a: 21 }, 'a')).toBeTruthy()
    expect(has([21], '[0]')).toBeTruthy()
    expect(has([{ a: [21] }], '[0].a[0]')).toBeTruthy()
    expect(has([{ a: [21, { a: [21] }] }], '[0].a[1].a[0]')).toBeTruthy()
  })
})
