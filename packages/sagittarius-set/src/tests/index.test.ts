/* eslint-disable @typescript-eslint/ban-ts-ignore */
import set from '../index'

describe('set', () => {
  it('should return false status if no path is provided', () => {
    const obj = { a: 21 }
    expect(set(obj)).toBeFalsy()
    expect(obj).toBe(obj)
  })

  it('should set value at non existent path pointer and create non existent portions of path and return status', () => {
    const obj1 = { a: 21, b: { a: { c: 'twenty one' } } }
    expect(set(obj1, 'c', 'twenty one')).toBeTruthy()
    // @ts-ignore
    expect(obj1.c).toBe('twenty one')

    const obj2 = { a: 21, b: { a: { c: 'twenty one' } } }
    expect(set(obj2, 'b.a.d.a', 21)).toBeTruthy()
    // @ts-ignore
    expect(obj2.b.a.d.a).toBe(21)
  })

  it('should set value at existent path pointer and return status', () => {
    const obj1 = { a: 21, b: { a: { c: 'twenty one' } } }
    expect(set(obj1, 'a', 'twenty one')).toBeTruthy()
    expect(obj1.a).toBe('twenty one')

    const obj2 = { a: 21, b: { a: { c: 'twenty one' } } }
    expect(set(obj2, 'b.a.c', 21)).toBeTruthy()
    expect(obj2.b.a.c).toBe(21)

    const obj3 = { a: 21, b: { a: { c: 'twenty one' } } }
    expect(set(obj3, 'b.a.c')).toBeTruthy()
    expect(obj3.b.a.c).toBe(undefined)
  })
})
