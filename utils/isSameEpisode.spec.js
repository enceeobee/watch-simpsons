const isSameEpisode = require('./isSameEpisode')

let actual
let expected
let episode1
let episode2

describe('isSameEpisode', () => {
  beforeEach(() => {
    actual = null
    episode1 = { nate: 'bisbee', a: 'thing', some: 'property', etc: 'etc' }
    episode2 = null
  })

  describe('should return true', () => {
    beforeEach(() => {
      expected = true
    })

    it('When both args are equal *by value*', () => {
      episode2 = Object.assign({}, episode1)
      actual = isSameEpisode(episode1, episode2)
      expect(actual).toEqual(expected)
    })

    it('when no args are passed', () => {
      actual = isSameEpisode()
      expect(actual).toEqual(expected)
    })
  })

  describe('should return false', () => {
    beforeEach(() => {
      expected = false
      episode2 = Object.assign({}, episode1)
    })
    it('when the episode1 has different values', () => {
      episode2.a = 'INVALID'
      actual = isSameEpisode(episode1, episode2)
      expect(actual).toEqual(expected)
    })

    it('when the episode1 has additional properties', () => {
      episode2.another = 'property'
      actual = isSameEpisode(episode1, episode2)
      expect(actual).toEqual(expected)
    })

    it('when the episode1 has fewer properties', () => {
      delete episode2.nate
      delete episode2.a
      actual = isSameEpisode(episode1, episode2)
      expect(actual).toEqual(expected)
    })
  })
})
