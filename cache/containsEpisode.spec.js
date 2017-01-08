const expect = require('chai').expect;
const containsEpisode = require('./containsEpisode');
const Episode = require('../episodes/Episode');

describe('cache/containsEpisode', () => {
  let actual;
  let expected;
  let cache;

  describe('should return false', () => {

    beforeEach(() => (expected = false));

    it('when no params are passed', () => {
      actual = containsEpisode();
      expect(actual).to.equal(expected);
    });

    it('when cache is empty', () => {
      actual = containsEpisode({}, []);
      expect(actual).to.equal(expected);

      actual = containsEpisode({ season: 1, episodeIndex: 2}, []);
      expect(actual).to.equal(expected);
    });

    it('when episode is invalid', () => {
      const validEpisode = new Episode({ season: 3, episodeIndex: 4 });
      const invalidEpisode = { seasonzz: 3, episodeIndexzz: 4 };
      actual = containsEpisode(validEpisode, [invalidEpisode]);
      expect(actual).to.equal(expected);
    });

    it('when cache has no objects with the same season and episodeIndex as the episode', () => {
      const episode = new Episode({ season: 7, episodeIndex: 6 });
      cache = [
        new Episode({ season: 7, episodeIndex: 5 }),
        new Episode({ season: 7, episodeIndex: 7 }),
        new Episode({ season: 6, episodeIndex: 6 })
      ];
      actual = containsEpisode(episode, cache);
      expect(actual).to.equal(expected);
    });
  });

  describe('should return true', () => {

    beforeEach(() => (expected = true));

    it('when episode has the same season and episodeIndex as an object in cache', () => {
      const episode = new Episode({ season: 7, episodeIndex: 6 });
      cache = [
        new Episode({ season: 7, episodeIndex: 5 }),
        new Episode({ season: 7, episodeIndex: 7 }),
        new Episode({ season: 6, episodeIndex: 6 }),
        new Episode({ season: 7, episodeIndex: 6 })
      ];
      actual = containsEpisode(episode, cache);
      expect(actual).to.equal(expected);
    });
  });
});
