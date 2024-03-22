import { StriMan } from "scrapetools";
import { writeFile } from "fs";

const writeDaysIntoSeparateFiles = (allDatesAndEntries) => {
  for (const entry of allDatesAndEntries) {
    const { date, text } = entry;
    const [monthPre, dayPre, year] = date.split("/");
    const month = StriMan.prependWithZeros(monthPre);
    const day = StriMan.prependWithZeros(dayPre);
    const writePath = `./diary/${year}-${month}-${day}.md`;
    writeFile(writePath, text, () => {});
  }
};

export default writeDaysIntoSeparateFiles;
