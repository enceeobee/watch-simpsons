const fs = require('fs')
const debug = require('debug')('watch-simpsons:addToCache')

const MAX_CACHE_SIZE = 15

function addAllToCache (episodes, existingCache) {
  const newCache = episodes.slice(0, MAX_CACHE_SIZE)
  let numToAdd = MAX_CACHE_SIZE - newCache.length

  while (numToAdd > 0 && existingCache.length > 0) {
    newCache.push(existingCache.shift())
    numToAdd--
  }

  return new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/cache.json`, JSON.stringify(newCache), (err) => {
      if (err) return reject(err)

      debug('Cache saved.')
      return resolve(newCache)
    })
  })
}

module.exports = addAllToCache
