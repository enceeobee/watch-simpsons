const seasonRegex = /Season [0-9]+/;

function numSeasons(seasonDirs = []) {
  return seasonDirs.filter(seasonDir => seasonRegex.test(seasonDir)).length;
}

module.exports = numSeasons;
