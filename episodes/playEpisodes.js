const childProcess = require('child_process')
const debug = require('debug')('watch-simpsons:playEpisodes')
const { addAllToCache, cache } = require('../cache')

/**
 * playEpisodes - Plays all Episodes in playlist
 *
 * @param  {array} playlist = [] Array of Episodes
 */
function playEpisodes (episodes = []) {
  const playbackFlags = process.env.PLAYBACK_FLAGS
  const playbackApp = process.env.PLAYBACK_APP_PATH
  const playlist = episodes.map(episode => `"${episode.path}"`).join(' ')
  const command = `${playbackApp} ${playlist} ${playbackFlags}`

  childProcess.exec(command, (error, stdout, stderr) => {
    if (stdout) debug(`stdout: ${stdout}`)
    if (stderr) debug(`stderr: ${stderr}`)
    if (error) debug(`ERROR: ${error}`)

    addAllToCache(episodes, cache)
      .then(localCache => childProcess.exec('pmset sleepnow').unref())
      .catch(e => { throw e })
  })
}

module.exports = playEpisodes
