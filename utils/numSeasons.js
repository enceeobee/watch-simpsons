const seasonRegex = /Season [0-9]+/;

function numSeasons(files) {
  return files.filter((file) => seasonRegex.test(file)).length;
}

module.exports = numSeasons;
