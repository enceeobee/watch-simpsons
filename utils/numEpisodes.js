/**
 * numEpisodes - Returns the number valid episodes in `filenamess`
 *
 * @param  {Array} files = [] Array of filenames
 * @return {number}           Amount of valid episodes
 */
function numEpisodes(filenames = []) {
  return filenames.filter(filename => /\.avi$/.test(filename)).length;
}

module.exports = numEpisodes;
