const childProcess = require('child_process');

function playEpisodes(playlist = []) {
  const playbackFlags = process.env.PLAYBACK_FLAGS;
  const playbackApp = process.env.PLAYBACK_APP_PATH;
  const command = `${playbackApp} ${playlist.join(' ')} ${playbackFlags}`;

  childProcess.exec(command, (error, stdout, stderr) => {

    if (stdout) console.log(`stdout: ${stdout}`);
    if (stderr) console.log(`stderr: ${stderr}`);
    if (error) console.log(`ERROR: ${error}`);

    // Shut 'er down
    childProcess.exec('pmset sleepnow').unref();
  });
}

module.exports = playEpisodes;
