import toPath from '../index'

describe('toPath', () => {
  it('should return empty array path if no arg is provided', () => {
    expect(toPath()).toEqual([])
  })
  it('should return corect array path', () => {
    expect(toPath('a.b.c')).toEqual(['a', 'b', 'c'])
    expect(toPath('a[21].b.c')).toEqual(['a', 21, 'b', 'c'])
    expect(toPath('a[21][21].b.c')).toEqual(['a', 21, 21, 'b', 'c'])
    expect(toPath('[21]')).toEqual([21])
  })
})
