const cache = require('./cache');
const fs = require('fs');
const debug = require('debug')('watch-simpsons:addToCache');

const NUM_EPISODES_TO_CACHE = 15;

function addToCache(episode) {
  const localCache = cache;
  if (localCache.length >= NUM_EPISODES_TO_CACHE) localCache.pop();
  localCache.unshift(episode);

  fs.writeFile(`${__dirname}/cache.json`, JSON.stringify(localCache), (err) => {
    if (err) throw err;
    debug('Cache saved.');
  });
}

module.exports = addToCache;
