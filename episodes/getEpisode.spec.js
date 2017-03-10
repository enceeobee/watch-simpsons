const { expect } = require('chai');
const getEpisode = require('./getEpisode');

let actual;
let expected;
let cache;

describe('getEpisode', () => {
  beforeEach(() => {
    cache = [];
    actual = null;
    expected = null;
  });

  describe('should return Episode', () => {
    // TODO - Use async/await
    it('when Episode is not in cache', (done) => {
      getEpisode(cache)
        .then((retrievedEpisode) => {
          expect(typeof retrievedEpisode).to.equal('object');
          actual = Object.assign({}, retrievedEpisode);
          expected = ['episode', 'episodeIndex', 'path', 'season'];
          expect(actual).to.have.keys(expected);
        })
        .then(done, done);
    });
  });

  describe('should reject', () => {
    it('when given invalid path', (done) => {
      getEpisode([], '/INVALID')
      .catch((err) => {
        actual = err;
        expected = ['errno', 'code', 'syscall', 'path'];
        expect(actual).to.have.keys(expected);
      })
      .then(done, done);
    });
  });
});
