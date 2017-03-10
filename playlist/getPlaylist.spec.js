const { expect } = require('chai');
const getPlaylist = require('./getPlaylist');
const getNumDupes = require('../playlist/getNumDupes');

let actual;
let expected;
let size;

describe('getPlaylist', () => {
  beforeEach(() => {
    actual = null;
    expected = null;
    size = 1;
  });

  it('should return an Array the same length as `size`', (done) => {
    size = 2;

    getPlaylist(size).then((episodes) => {
      actual = episodes.length;
      expected = size;
      expect(actual).to.equal(expected);
    }).then(done, done);
  });

  it('should default to one', (done) => {
    getPlaylist().then((episodes) => {
      actual = episodes.length;
      expected = size;
      expect(actual).to.equal(expected);
    }).then(done, done);
  });

  it('shouldn\'t have dupes', (done) => {
    getPlaylist(2).then((episodes) => {
      expected = true;
      actual = getNumDupes(episodes);
      expect(actual === 0).to.equal(expected);
    }).then(done, done);
  });
});
