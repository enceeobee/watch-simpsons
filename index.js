// TODO - Use ES6 modules
const getEpisodePath = require('./episodes/getEpisodePath');
const playEpisode = require('./episodes/playEpisode');
const escapeNonWords = require('./utils/escapeNonWords');

(function main() {
  getEpisodePath(episodePath => playEpisode(escapeNonWords(episodePath)))
}());
