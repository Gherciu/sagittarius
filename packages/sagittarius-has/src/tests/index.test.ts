import has from '../index'

describe('has', () => {
  it('should return false if no path is provided', () => {
    expect(has([21])).toBeFalsy()
  })

  it('should return corect boolean value if is provided native objects like Number, RegEx etc.', () => {
    expect(has([21], '[0].toString')).toBeTruthy()
    expect(has([0], '[0].toString')).toBeTruthy()
    expect(has([''], '[0].trim')).toBeTruthy()
    expect(has([/^21/], '[0].test')).toBeTruthy()
    expect(has(0, 'toString')).toBeTruthy()
    expect(has(/^21/, 'test')).toBeTruthy()
    expect(has('', 'trim')).toBeTruthy()
    expect(has(0, 'test')).toBeFalsy()
    expect(has(/^21/, 'a')).toBeFalsy()
    expect(has('', 'b')).toBeFalsy()
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
