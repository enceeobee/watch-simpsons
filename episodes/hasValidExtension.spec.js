const hasValidExtension = require('./hasValidExtension')
const Episode = require('./Episode')

const validExtensions = ['mpg', 'avi']
const episode = new Episode({
  episode: 'Worst Episode Ever.avi',
  episodeIndex: 10,
  season: 12
})

describe('/episodes/hasValidExtension', () => {
  let actual
  let expected

  describe('Should return true', () => {
    beforeEach(() => (expected = true))
    it('when the file\'s extension is contained in `validExtensions`', () => {
      actual = hasValidExtension(episode, validExtensions)
      expect(actual).toBe(expected)
    })
  })

  describe('Should return false', () => {
    beforeEach(() => (expected = false))

    it('when the file\'s extension is not contained in `validExtensions`', () => {
      episode.episode = 'File with.bad.extension'
      actual = hasValidExtension(episode, validExtensions)
      expect(actual).toBe(expected)
    })

    it('when the file doesn\'t have an extension', () => {
      episode.episode = 'File without extension'
      actual = hasValidExtension(episode, validExtensions)
      expect(actual).toBe(expected)
    })

    it('when the file doesn\'t have a filename', () => {
      delete episode.episode
      actual = hasValidExtension(episode, validExtensions)
      expect(actual).toBe(expected)
    })
  })
})
