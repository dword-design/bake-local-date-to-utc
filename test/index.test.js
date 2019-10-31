import bakeLocalDateToUtc from '@dword-design/bake-local-date-to-utc'

describe('index', () => {

  it('works', () => expect(bakeLocalDateToUtc(new Date('2019-10-27T19:10:32.000Z')).toISOString()).toEqual('2019-10-27T20:10:32.000Z'))
})
