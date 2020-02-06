import bakeLocalDateToUtc from '@dword-design/bake-local-date-to-utc'

export default () => expect(bakeLocalDateToUtc(new Date('2019-10-27T19:10:32.000Z'))).toBeInstanceOf(Date)
