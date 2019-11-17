import debounce from '../index'

describe('debounce', () => {
  it('should return a function', () => {
    expect(typeof debounce(() => {}, 100)).toEqual('function')
  })
  it('should call provided function after provided delay', () => {
    jest.useFakeTimers()
    const spyFunction = jest.fn()
    debounce(spyFunction, 100)()
    jest.runAllTimers()
    expect(spyFunction).toBeCalled()
  })
  it('should call provided function once', () => {
    jest.useFakeTimers()
    const spyFunction = jest.fn()
    const debounced = debounce(spyFunction, 100)
    /* eslint-disable no-plusplus */
    for (let i = 0; i < 20; i++) {
      debounced()
    }
    jest.runAllTimers()
    expect(spyFunction).toHaveBeenCalledTimes(1)
  })
  it('should not call provided function if cancel method is invoked', () => {
    jest.useFakeTimers()
    const spyFunction = jest.fn()
    const debounced = debounce(spyFunction, 100)
    debounced()
    debounced.cancel()
    jest.runAllTimers()
    expect(spyFunction).toHaveBeenCalledTimes(0)
  })
  it('should not log errors when cancel timeout if return function from debounce is not invoked', () => {
    const spyFunction = jest.fn()
    const debounced = debounce(spyFunction, 100)
    expect(debounced.cancel).not.toThrow()
    expect(spyFunction).toHaveBeenCalledTimes(0)
  })
})
