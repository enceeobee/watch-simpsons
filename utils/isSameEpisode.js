/**
 * isSameEpisode - Determines if two given Episodes are equal by value
 *
 * @param  {object} episode1 = {}
 * @param  {object} episode2 = {}
 * @return {Boolean}
 */
function isSameEpisode (episode1 = {}, episode2 = {}) {
  // Shortcut return
  if (episode1 === episode2) return true

  const episode1Keys = Object.keys(episode1)
  const episode2Keys = Object.keys(episode2)

  if (episode1Keys.length !== episode2Keys.length) return false

  return episode1Keys.every(key => episode1[key] === episode2[key])
}

module.exports = isSameEpisode
