const isSameEpisode = require('../utils/isSameEpisode')

function getNumDupes (playlist = []) {
  let numDupes = 0

  for (let i = 0; i < playlist.length - 1; i += 1) {
    for (let j = i + 1; j < playlist.length; j += 1) {
      if (isSameEpisode(playlist[i], playlist[j])) numDupes += 1
    }
  }
  return numDupes
}

module.exports = getNumDupes
