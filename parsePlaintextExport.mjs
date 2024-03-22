import fs from "fs";
import getAllDates from "./functions/getAllDates.mjs";
import getAllEntries from "./functions/getAllEntries.mjs";
import mergeDatesAndEntries from "./functions/mergeDatesAndEntries.mjs";
import convertDiaryArrayToOrderedObject from "./functions/convertDiaryArrayToOrderedObject.mjs";
import writeDaysIntoSeparateFiles from "./functions/writeDaysIntoSeparateFiles.mjs";

const exportedPlaintext = fs.readFileSync(
  "./RedNotebook-Export_2024-03-22.txt",
  {
    encoding: "utf8",
  }
);

const allDates = getAllDates(exportedPlaintext);
const allEntries = getAllEntries(exportedPlaintext);

const mergedDatesAndEntries = mergeDatesAndEntries(allDates, allEntries);

writeDaysIntoSeparateFiles(mergedDatesAndEntries);

// fs.writeFileSync(
//   "allDatesAndEntries.json",
//   JSON.stringify(mergedDatesAndEntries)
// );

// const finalOrderedDiary = convertDiaryArrayToOrderedObject(
//   mergedDatesAndEntries
// );

// fs.writeFileSync("entireDiaryOrdered.json", JSON.stringify(finalOrderedDiary));
