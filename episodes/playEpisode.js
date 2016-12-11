const childProcess = require('child_process');

function playEpisode(episodePath) {
  const vlcFlags = '-f --video-on-top --no-video-title-show --no-play-and-stop --play-and-exit';
  const vlc = process.env.VLC_COMMAND;
  const command = `${vlc} ${episodePath} ${vlcFlags}`;

  console.log(`Playing ${episodePath}`);

  childProcess.exec(command, (error, stdout, stderr) => {

    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);

    if (error) console.log(error);

    // Shut 'er down
    childProcess.exec('pmset sleepnow').unref();
  });
}

module.exports = playEpisode;
