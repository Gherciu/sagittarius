import range from '../index'

describe('range', () => {
  it('should return a corect range if only start is provided', () => {
    expect(range(4)).toEqual([0, 1, 2, 3])
    expect(range(-4)).toEqual([0, -1, -2, -3])
    expect(range(0)).toEqual([])
  })

  it('should return corect range if only start and end is provided', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4])
    expect(range(0, -5)).toEqual([0, -1, -2, -3, -4])
  })

  it('should return a corect range if is provided start, end and step to increment', () => {
    expect(range(0, 20, 5)).toEqual([0, 5, 10, 15])
    expect(range(0, -20, -5)).toEqual([0, -5, -10, -15])
    expect(range(0, -4, -1)).toEqual([0, -1, -2, -3])
    expect(range(1, 4, 0)).toEqual([1, 1, 1])
    expect(range(0, -4, 0)).toEqual([0, 0, 0, 0])
    expect(range(-1, -4, 0)).toEqual([-1, -1, -1])
  })
})
