const fs = require("fs");

const exportedPlaintext = fs.readFileSync(
  "/home/morket/RedNotebook-Export_2022-07-02.txt",
  {
    encoding: "utf8",
  }
);

const dateHeaderRegex = /\n{2,3}  \w*, \d{2}\/\d{2}\/\d{4}\n  =+\n{2}/gm;
const justDateRegex = /\d{2}\/\d{2}\/\d{4}/;

function getAllDates(entireText) {
  const matches = entireText.match(dateHeaderRegex);
  return matches.map((s) => s.match(justDateRegex)[0]);
}

function getAllEntries(entireText) {
  return entireText.split(dateHeaderRegex).slice(1);
}

const allDates = getAllDates(exportedPlaintext);
const allEntries = getAllEntries(exportedPlaintext);

function mergeDatesAndEntries(dates, entries) {
  if (dates.length !== entries.length) {
    throw new Error("Dates and Entries Arrays' lengths don't match");
  }
  const datedDayObjects = [];
  for (let i = 0; i < dates.length; i++) {
    datedDayObjects.push({
      date: dates[i],
      text: entries[i],
    });
  }
  return datedDayObjects;
}

const mergedDatesAndEntries = mergeDatesAndEntries(allDates, allEntries);

function getDateObjectFromDateString(dateString) {
  const [month, day, year] = dateString.split("/");
  return { year, month: parseInt(month), day: parseInt(day) };
}

function convertDiaryArrayToOrderedObject(mergedDiaryArray) {
  const orderedDiary = {};
  for (entry of mergedDiaryArray) {
    const { year, month, day } = getDateObjectFromDateString(entry.date);
    if (!orderedDiary[year]) {
      orderedDiary[year] = {};
    }
    if (!orderedDiary[year][month]) {
      orderedDiary[year][month] = {};
    }
    orderedDiary[year][month][day] = entry.text;
  }
  return orderedDiary;
}

const finalOrderedDiary = convertDiaryArrayToOrderedObject(
  mergedDatesAndEntries
);

fs.writeFileSync("entireDiaryOrdered.json", JSON.stringify(finalOrderedDiary));
