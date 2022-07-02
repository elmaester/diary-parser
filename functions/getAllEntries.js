const { dateHeaderRegex } = require("../regex");

function getAllEntries(entireText) {
  return entireText.split(dateHeaderRegex).slice(1);
}
exports.getAllEntries = getAllEntries;
