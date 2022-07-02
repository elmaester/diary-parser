const fs = require("fs");

const May2022 = fs.readFileSync("/home/morket/.rednotebook/data/2022-05.txt", {
  encoding: "utf8",
});

function parseOneDay(dayText) {
  return dayText
    .replaceAll('"', "")
    .replaceAll("''", "'")
    .split("\n\n")
    .map((s) =>
      s
        .split("\n")
        .map((s) => s.trim())
        .join(" ")
    )
    .map((s) => s.trim());
}

function splitMonthIntoDays(monthText) {
  return monthText
    .split(/\d+:\n\ \ text: /)
    .map((dayText) => dayText.slice(1, -2));
}

function enumerateDays(monthText) {
  return monthText.match(/\d+:\n/g).map((s) => parseInt(s));
}

function parseMonth(monthText) {
  const days = {};
  const monthNumbers = enumerateDays(monthText);
  const dayEntries = splitMonthIntoDays(monthText);
  for (let i = 1; i <= monthNumbers.length; i++) {
    days[monthNumbers[i - 1]] = parseOneDay(dayEntries[i]);
  }
  return days;
}

fs.writeFileSync("may.json", JSON.stringify(parseMonth(May2022)));
