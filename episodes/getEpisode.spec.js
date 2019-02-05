const getEpisode = require('./getEpisode')

let actual
let expected
let cache

describe('getEpisode', () => {
  beforeEach(() => {
    cache = []
    actual = null
    expected = null
  })

  describe('should return Episode', () => {
    it('when Episode is not in cache', async () => {
      const episode = await getEpisode(cache)

      expect(typeof episode).toBe('object')

      actual = Object.assign({}, episode)
      expected = ['episode', 'episodeIndex', 'path', 'season']

      expected.forEach(prop => expect(actual).toHaveProperty(prop))
    })
  })

  describe('should reject', () => {
    it('when given invalid path', (done) => {
      getEpisode([], '/INVALID')
        .catch((err) => {
          actual = err
          expected = ['errno', 'code', 'syscall', 'path']

          expected.forEach(prop => expect(actual).toHaveProperty(prop))
        })
        .then(done, done)
    })
  })
})
