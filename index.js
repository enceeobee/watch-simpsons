const { argv } = require('yargs')

const playEpisodes = require('./episodes/playEpisodes')
const getPlaylist = require('./playlist/getPlaylist');

(function main () {
  getPlaylist(argv.s || argv.size || 1).then(playEpisodes)
}())
