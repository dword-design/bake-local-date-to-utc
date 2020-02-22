import bakeLocalDateToUtc from '.'

export default {
  valid: () => expect(bakeLocalDateToUtc(new Date('2019-10-27T19:10:32.000Z'))).toBeInstanceOf(Date),
}
