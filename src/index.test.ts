import { helloWorld } from './index'

describe('System under test', () => {
  it('prints Hello World', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    helloWorld()
    expect(consoleSpy).toHaveBeenCalledWith('Hello World')
  })
})
