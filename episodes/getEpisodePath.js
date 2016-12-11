const addToCache = require('../cache/addToCache');
const cache = require('../cache/cache');
const Episode = require('./Episode');
const fs = require('fs');
const numEpisodes = require('../utils/numEpisodes');
const numSeasons = require('../utils/numSeasons');

function getEpisodePath(callback) {

  let episodePath = process.env.SIMPSONS_PATH;

  fs.readdir(episodePath, (err, files) => {

    if (err) throw new Error(err);

    let season = Math.ceil(Math.random() * (numSeasons(files) - 0) + 0);
    if (season < 10) season = `0${season}`;

    episodePath += `/Season ${season}`;

    fs.readdir(episodePath, (err, files) => {

      if (err) throw new Error(err);

      // const episodeIndex = Math.ceil(Math.random() * (numEpisodes(files) - 0) + 0);
      const episodeIndex = Math.ceil(Math.random() * Number(numEpisodes(files)));
      const episode = files[episodeIndex];
      const episodeObj = new Episode({ season, episode, episodeIndex });

      episodePath += `/${episode}`;

      const isInCache = cache.reduce((prevVal, curVal) => {
        if (prevVal === true) return true;
        return (curVal.season === episodeObj.season && curVal.episodeIndex === episodeObj.episodeIndex);
      }, episodeObj);

      // This conditional is intentionally explicit
      if (isInCache !== true) {
        callback(episodePath);
        addToCache(episodeObj);
      } else {
        // Found an episode in cache, try again
        getEpisodePath(callback);
      }
    });
  });
}

module.exports = getEpisodePath;
