const cache = require('../cache/cache.json');
const getEpisode = require('../episodes/getEpisode');
const getNumDupes = require('./getNumDupes');
const removeDupes = require('./removeDupes');

/**
 * fetchPlaylist - A recursive helper function to fetch a unique playlist
 *
 * @param  {Number} size           Number of Episodes to play
 * @param  {Function} callback     Callback funciton
 * @param  {Array} playlist = []   A playlist of Episodes
 */
function fetchPlaylist(size, callback, playlist = []) {
  const episodePromises = [];

  let finalPlaylist = [];

  for (let index = 0; index < size; index += 1) {
    episodePromises.push(getEpisode(cache));
  }

  Promise
    .all(episodePromises)
    .then((episodes) => {
      finalPlaylist = playlist.concat(episodes);
      const numDupes = getNumDupes(finalPlaylist);

      if (numDupes === 0) {
        callback(null, finalPlaylist);
      } else {
        fetchPlaylist(numDupes, callback, removeDupes(finalPlaylist));
      }
    });
}

/**
 * getPlaylist - Return an array of unique Episodes to play
 *
 * @param  {Number} size = 1 Number of episodes to play
 * @return {promise}         Resolves with Episodes to play (in order)
 */
function getPlaylist(size = 1) {
  return new Promise((resolve, reject) => {
    fetchPlaylist(size, (err, playlist) => {
      if (err) reject(err);
      resolve(playlist);
    });
  });
}

module.exports = getPlaylist;
