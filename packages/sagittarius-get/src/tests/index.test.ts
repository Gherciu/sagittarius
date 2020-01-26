import get from '../index'

describe('get', () => {
  it('should return undefined if no path or no arg is provided', () => {
    expect(get()).toEqual(undefined)
    expect(get([21])).toEqual(undefined)
    expect(get({ a: { b: 21 } })).toEqual(undefined)
  })

  it('should return corect values from native objects like Number, RegEx etc.', () => {
    expect(get([21], '[0].toString')).toBeInstanceOf(Function)
    expect(get([0], '[0].toString')).toBeInstanceOf(Function)
    expect(get([''], '[0].trim')).toBeInstanceOf(Function)
    expect(get([/^21/], '[0].test')).toBeInstanceOf(Function)
    expect(get(0, 'toString')).toBeInstanceOf(Function)
    expect(get('', 'trim')).toBeInstanceOf(Function)
    expect(get(/^21/, 'test')).toBeInstanceOf(Function)
  })

  it('should return argument value that match provided path', () => {
    expect(get({ a: 21 }, 'a')).toEqual(21)
    expect(get([21], '[0]')).toEqual(21)
    expect(get([{ a: [21] }], '[0].a[0]')).toEqual(21)
    expect(get([{ a: [21, { a: [21] }] }], '[0].a[1].a[0]')).toEqual(21)
  })

  it('should return defaultValue if argument value not match provided path', () => {
    expect(get({ a: 21 }, 'b', 'twenty one')).toEqual('twenty one')
    expect(get([21], '[1]', 'twenty one')).toEqual('twenty one')
    expect(get([{ a: [21] }], '[0].a[2]', 'twenty one')).toEqual('twenty one')
    expect(
      get([{ a: [21, { a: [21] }] }], '[0].a[2].a[0]', 'twenty one'),
    ).toEqual('twenty one')
  })
})
