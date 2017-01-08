const { containsEpisode } = require('../cache');
const hasValidExtension = require('./hasValidExtension');

// TODO - make this an env variable, or passed as an arg
const validExtensions = ['avi'];

/**
 * isValidEpisode - Determines if the episode can be played
 *
 * @param  {object} episode An episode object
 * @param  {Array} cache An array of cached episodes
 * @return {Boolean} If this episode is playable
 */
function isValidEpisode(episode, cache) {
  const isInCache = containsEpisode(episode, cache);
  const isValidExtension = hasValidExtension(episode, validExtensions);

  return (!isInCache && isValidExtension);
}

module.exports = isValidEpisode;
