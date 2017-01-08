const addToCache = require('../cache/addToCache');
const Episode = require('./Episode');
const fs = require('fs');
const numEpisodes = require('../utils/numEpisodes');
const numSeasons = require('../utils/numSeasons');
const { cache, containsEpisode } = require('../cache');
const isValidEpisode = require('./isValidEpisode');

/**
 * getEpisodePath - description
 *
 * @param  {type} callback description
 * @return {type}          description
 */
function getEpisodePath(callback) {

  let episodePath = process.env.SIMPSONS_PATH;

  fs.readdir(episodePath, (err, files) => {

    if (err) throw new Error(err);

    let season = Math.ceil(Math.random() * (numSeasons(files) - 0) + 0);
    if (season < 10) season = `0${season}`;

    episodePath += `/Season ${season}`;

    fs.readdir(episodePath, (err, files) => {

      if (err) throw new Error(err);

      const episodeIndex = Math.ceil(Math.random() * Number(numEpisodes(files)));
      const episode = files[episodeIndex];
      const episodeObj = new Episode({ season, episode, episodeIndex });

      episodePath += `/${episode}`;

      if (isValidEpisode(episodeObj, cache)) {
        callback(episodePath);
        // TODO - Maybe we shouldn't cache the episode until its done playing.
        addToCache(episodeObj);
      } else {
        // Found an episode in cache, try again
        getEpisodePath(callback);
      }
    });
  });
}

module.exports = getEpisodePath;
