const { isSameEpisode } = require('../utils')

function removeDupes (episodes = []) {
  const uniqueEpisodes = []
  const episodesLen = episodes.length

  let isDupe = false

  for (let i = 0; i < episodesLen; i += 1) {
    for (let j = 0; j < uniqueEpisodes.length; j += 1) {
      isDupe = isSameEpisode(episodes[i], uniqueEpisodes[j])
      if (isDupe) break
    }
    if (!isDupe) uniqueEpisodes.push(episodes[i])
  }

  return uniqueEpisodes
}

module.exports = removeDupes
