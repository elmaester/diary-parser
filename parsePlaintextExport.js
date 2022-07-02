const fs = require("fs");
const { convertDiaryArrayToOrderedObject } = require("./functions/convertDiaryArrayToOrderedObject");
const { getAllDates } = require("./functions/getAllDates");
const { getAllEntries } = require("./functions/getAllEntries");
const { mergeDatesAndEntries } = require("./functions/mergeDatesAndEntries");

const exportedPlaintext = fs.readFileSync(
  "/home/morket/RedNotebook-Export_2022-07-02.txt",
  {
    encoding: "utf8",
  }
);

const allDates = getAllDates(exportedPlaintext);
const allEntries = getAllEntries(exportedPlaintext);

const mergedDatesAndEntries = mergeDatesAndEntries(allDates, allEntries);

const finalOrderedDiary = convertDiaryArrayToOrderedObject(
  mergedDatesAndEntries
);

fs.writeFileSync("entireDiaryOrdered.json", JSON.stringify(finalOrderedDiary));
