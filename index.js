const playEpisodes = require('./episodes/playEpisodes');
const getPlaylist = require('./playlist/getPlaylist');
const { argv } = require('yargs');

(function main() {
  getPlaylist(argv.s || argv.size || 1).then(playEpisodes);
}());
