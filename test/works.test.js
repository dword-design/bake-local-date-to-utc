import bakeLocalDateToUtc from '@dword-design/bake-local-date-to-utc'
import expect from 'expect'

export default () => expect(bakeLocalDateToUtc(new Date('2019-10-27T19:10:32.000Z'))).toBeInstanceOf(Date)
