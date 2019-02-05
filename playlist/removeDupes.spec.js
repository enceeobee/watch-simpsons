const removeDupes = require('./removeDupes')

let actual
let expected
let episodes

describe('removeDupes', () => {
  beforeEach(() => {
    actual = null
    expected = null
    episodes = []
  })

  describe('when dupes exist', () => {
    it('should return a unique array', () => {
      episodes = [{ a: 'a' }, { b: 'b' }, { c: 'c' }, { a: 'a' }]
      expected = [{ a: 'a' }, { b: 'b' }, { c: 'c' }]
      actual = removeDupes(episodes)
      expect(actual).toEqual(expected)
    })

    it('should return a unique array when all entries are the same', () => {
      episodes = [{ a: 'a' }, { a: 'a' }, { a: 'a' }, { a: 'a' }]
      expected = [{ a: 'a' }]
      actual = removeDupes(episodes)
      expect(actual).toEqual(expected)
    })
  })
  describe('when dupes do not exist', () => {
    it('should return original array', () => {
      episodes = [{ a: 'a' }, { b: 'b' }, { c: 'c' }]
      expected = episodes
      actual = removeDupes(episodes)
      expect(actual).toEqual(expected)
    })
  })
})
