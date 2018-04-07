const { expect } = require('chai')
const getNumDupes = require('./getNumDupes')

let actual
let expected
let playlist

describe('getNumDupes', () => {
  beforeEach(() => {
    actual = null
    expected = null
    playlist = [{ a: 'a' }, { b: 'b' }, { c: 'c' }]
  })

  describe('returns number of dupes', () => {
    it('should return 0', () => {
      expected = 0
      actual = getNumDupes(playlist)
      expect(actual).to.equal(expected)
    })

    it('should return 1', () => {
      expected = 1
      playlist.push({ c: 'c' })
      actual = getNumDupes(playlist)
      expect(actual).to.equal(expected)
    })

    it('should return 2', () => {
      expected = 2
      playlist.push({ c: 'c' }, { b: 'b' })
      actual = getNumDupes(playlist)
      expect(actual).to.equal(expected)
    })
  })
})
