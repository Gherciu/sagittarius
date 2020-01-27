import difference from '../index'

describe('difference', () => {
  it('should return the correct differences between 2 args', () => {
    expect(difference([21, 1997], [21, 2020])).toEqual([1997])
    expect(difference([21, 1997], [])).toEqual([21, 1997])
    expect(difference([], [21, 1997])).toEqual([])

    expect(difference({ a: 21, b: 2020 }, { a: 1997, b: 2020 })).toEqual({
      a: 21,
    })
    expect(difference({}, { a: 1997, b: 2020 })).toEqual({})
    expect(difference({ c: 21 }, { a: 1997, b: 2020 })).toEqual({ c: 21 })
    expect(difference({ c: 21 }, { c: 21, a: 1997, b: 2020 })).toEqual({})
    expect(difference({ a: [21] }, { a: [21, 1997], b: 2020 })).toEqual({
      a: [21],
    })

    expect(difference('twenty one', 'twenty one years')).toEqual('')
    expect(difference('twenty one years', 'twenty one')).toEqual(' years')
    expect(difference('', 'twenty one')).toEqual('')
  })

  it('should return arg as is if typeof arg is unhandled', () => {
    // difference doesnt handle numbers
    expect(difference(21, 22)).toEqual(21)
    // difference doesnt handle bool values
    expect(difference(false, true)).toEqual(false)
  })

  it('should return arg as is if typeof arg is not equl with typeof argToCompare', () => {
    expect(difference([21], {})).toEqual([21])
    expect(difference('twenty one', [])).toEqual('twenty one')
  })
})
