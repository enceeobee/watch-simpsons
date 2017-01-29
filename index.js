// TODO - Use ES6 modules
// nodemon and babel halp: https://github.com/babel/example-node-server
const getEpisodePath = require('./episodes/getEpisodePath');
const playEpisodes = require('./episodes/playEpisodes');

(function main() {
  // getEpisodePath(episodePath => playEpisodes([escapeNonWords(episodePath)]))
  getEpisodePath(episodePath => playEpisodes([`"${episodePath}"`]));
}());
