// TODO - Use ES6 modules
// nodemon and babel halp: https://github.com/babel/example-node-server
const playEpisodes = require('./episodes/playEpisodes');
const getPlaylist = require('./playlist/getPlaylist');
const { argv } = require('yargs');

(function main() {
  getPlaylist(argv.s || argv.size || 1)
    .then(playlist => playEpisodes(playlist));
}());
