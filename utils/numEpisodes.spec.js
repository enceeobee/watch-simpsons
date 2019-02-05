const numEpisodes = require('./numEpisodes')

let actual
let expected
let filenames

describe('numEpisodes', () => {
  beforeEach(() => {
    actual = null
    expected = null
    filenames = []
  })

  it('should return total count if all valid files', () => {
    filenames = ['test.avi', 'test.avi', 'test.avi']
    expected = filenames.length
    actual = numEpisodes(filenames)
    expect(actual).toEqual(expected)
  })

  it('should return count - invalid files', () => {
    filenames = ['test.avi', 'INVALID.aviXX', 'INVALID', 'Thumbs.db', 'valid.avi']
    expected = 2
    actual = numEpisodes(filenames)
    expect(actual).toEqual(expected)
  })

  it('should return zero when no filenames are passed', () => {
    actual = numEpisodes()
    expected = 0
    expect(actual).toEqual(expected)
  })

  afterEach(() => expect(typeof actual).toEqual('number'))
})
