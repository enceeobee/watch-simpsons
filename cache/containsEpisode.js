const { isSameEpisode } = require('../utils')

/**
 * containsEpisode - Determines if an episode is in the cache
 *
 * @param  {object} episode = {} An episode object
 * @param  {Array} cache = []    An array of cached episodes
 * @return {Boolean}             If the cache contains this episode
 */
function containsEpisode (episode = {}, cache = []) {
  return cache.some(cachedEpisode => isSameEpisode(cachedEpisode, episode))
}

module.exports = containsEpisode
