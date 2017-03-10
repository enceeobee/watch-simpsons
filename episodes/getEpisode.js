const Episode = require('./Episode');
const fs = require('fs');
const numEpisodes = require('../utils/numEpisodes');
const numSeasons = require('../utils/numSeasons');
const isValidEpisode = require('./isValidEpisode');

/**
 * fetchEpisode - Recursive helper function to fetch a valid Episode
 *
 * @param  {String} path     Path at which to begin traversing
 * @param  {Array} cache    Array of recently-watched Episodes
 * @param  {function} callback Function to call when an error or Episode is encountered
 */
function fetchEpisode(path, cache, callback) {
  let episodePath = path;

  fs.readdir(episodePath, (err, files) => {
    if (err) callback(err);

    let season = Math.ceil(Math.random() * numSeasons(files));
    if (season < 10) season = `0${season}`;

    episodePath += `Season ${season}`;

    fs.readdir(episodePath, (seasonErr, seasonFiles) => {
      if (seasonErr) callback(seasonErr);

      const episodeIndex = Math.ceil(Math.random() * numEpisodes(seasonFiles));
      const episode = seasonFiles[episodeIndex];
      const episodeObj = new Episode({
        season,
        episode,
        episodeIndex,
        path: episodePath += `/${episode}`
      });

      if (isValidEpisode(episodeObj, cache)) {
        callback(null, episodeObj);
      } else {
        // Found an episode in cache, try again
        fetchEpisode(path, cache, callback);
      }
    });
  });
}

/**
 * getEpisode - Retrieve a random Episode
 * @param {Array} cache - Cached Episodes
 * @return {Promise} The retrieved Episode
 */
function getEpisode(cache = [], path = process.env.SIMPSONS_PATH) {
  return new Promise((resolve, reject) => {
    fetchEpisode(path, cache, (err, episode) => {
      if (err) reject(err);
      resolve(episode);
    });
  });
}

module.exports = getEpisode;
