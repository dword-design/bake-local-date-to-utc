import self from './index.js'

export default {
  valid: () =>
    expect(self(new Date('2019-10-27T19:10:32.000Z'))).toBeInstanceOf(Date),
}
