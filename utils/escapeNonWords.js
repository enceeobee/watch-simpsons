function escapeNonWords(str) {
  return str.replace(/\W/g, match => `\\${match}`);
}

module.exports = escapeNonWords;
