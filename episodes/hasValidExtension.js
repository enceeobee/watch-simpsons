/**
 * hasValidExtension - Determines if an episode has a valid extension
 *
 * @param  {object} episode = {}         Episode object
 * @param  {array} validExtensions = [] Array of valid file extensions
 * @return {Boolean}                       
 */
function hasValidExtension(episode = {}, validExtensions = []) {
  const extensionMatch = String(episode.episode).match(/\.([a-z0-9]+)$/i);

  if (!extensionMatch) return false;

  return validExtensions.includes(extensionMatch[1]);
}

module.exports = hasValidExtension;
