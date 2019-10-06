import random from '../index'

describe('random', () => {
  it('returned value should greater or equal with min argument and less or equal that max argument', () => {
    expect(random(12, 13)).toBeGreaterThanOrEqual(12)
    expect(random(12, 13)).toBeLessThanOrEqual(13)
  })
  it('returned value should be a integer number', () => {
    expect(Number.isInteger(random(12, 21))).toBeTruthy()
  })
})
