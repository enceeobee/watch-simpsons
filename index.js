// TODO - Use ES6 modules
// nodemon and babel halp: https://github.com/babel/example-node-server
const playEpisodes = require('./episodes/playEpisodes');
const getPlaylist = require('./playlist/getPlaylist');

(function main() {
  // TODO - Use input
  getPlaylist()
    .then(playlist => playEpisodes(playlist));
}());
