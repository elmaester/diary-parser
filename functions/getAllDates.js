const { dateHeaderRegex, justDateRegex } = require("../regex");

function getAllDates(entireText) {
  const matches = entireText.match(dateHeaderRegex);
  return matches.map((s) => s.match(justDateRegex)[0]);
}
exports.getAllDates = getAllDates;
