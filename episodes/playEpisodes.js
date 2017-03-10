const childProcess = require('child_process');
const debug = require('debug')('watch-simpsons:playEpisodes');
const cache = require('../cache');

/**
 * playEpisodes - Plays all Episodes in playlist
 *
 * @param  {type} playlist = [] Array of Episodes
 * @return {type}               description
 */
function playEpisodes(episodes = []) {
  const playbackFlags = process.env.PLAYBACK_FLAGS;
  const playbackApp = process.env.PLAYBACK_APP_PATH;
  const playlist = episodes.map(episode => `"${episode.path}"`).join(' ');
  const command = `${playbackApp} ${playlist} ${playbackFlags}`;

  childProcess.exec(command, (error, stdout, stderr) => {
    if (stdout) debug(`stdout: ${stdout}`);
    if (stderr) debug(`stderr: ${stderr}`);
    if (error) debug(`ERROR: ${error}`);

    // Add to episodes to cache
    episodes.map(episode => cache.addToCache(episode));

    // Shut 'er down
    childProcess.exec('pmset sleepnow').unref();
  });
}

module.exports = playEpisodes;
