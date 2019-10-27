import bakeLocalDateToUtc from '@dword-design/bake-local-date-to-utc'

it('works', () => expect(bakeLocalDateToUtc(new Date('2019-10-27T19:10:32.000Z')).toISOString()).toEqual('2019-10-27T19:10:32.000Z'))
