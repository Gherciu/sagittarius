import uniq from '../index'

describe('uniq', () => {
  it('should return an empty array if no arg is provided', () => {
    expect(uniq()).toEqual([])
  })

  it('should return filtered uniq values', () => {
    expect(uniq([21, 'twenty one', 21])).toEqual([21, 'twenty one'])
    expect(uniq([21, 'twenty one', null, 21])).toEqual([21, 'twenty one', null])
    expect(uniq([21, 'twenty one', 21, [21, 'twenty one', 21]])).toEqual([
      21,
      'twenty one',
      [21, 'twenty one', 21],
    ])
    expect(uniq([{ a: 21 }, { a: 'twenty one' }, { a: 21 }])).toEqual([
      { a: 21 },
      { a: 'twenty one' },
    ])
  })
})
