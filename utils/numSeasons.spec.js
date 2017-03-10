const { expect } = require('chai');
const numSeasons = require('./numSeasons');

let actual;
let expected;
let seasonDirs;

describe('numSeasons', () => {
  beforeEach(() => {
    actual = null;
    expected = null;
    seasonDirs = [];
  });

  it('should return total count if all valid season directories', () => {
    seasonDirs = ['Season 01', 'Season 02', 'Season 03', 'Season 666'];
    expected = seasonDirs.length;
    actual = numSeasons(seasonDirs);
    expect(actual).to.equal(expected);
  });

  it('should return count - invalid directories', () => {
    seasonDirs = ['.DS_Store', 'Season 02', 'Season 03', 'INVALID'];
    expected = 2;
    actual = numSeasons(seasonDirs);
    expect(actual).to.equal(expected);
  });

  it('should return zero when no seasonDirs are passed', () => {
    actual = numSeasons();
    expected = 0;
    expect(actual).to.equal(expected);
  });

  afterEach(() => expect(typeof actual).to.equal('number'));
});
