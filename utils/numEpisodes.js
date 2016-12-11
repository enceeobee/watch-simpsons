function numEpisodes(files) {
  return files.filter((file) => /\.avi$/.test(file)).length;
}

module.exports = numEpisodes;
