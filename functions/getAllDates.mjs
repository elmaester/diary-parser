import { dateHeaderRegex, justDateRegex } from "../regex.mjs";

function getAllDates(entireText) {
  const matches = entireText.match(dateHeaderRegex);
  return matches.map((s) => s.match(justDateRegex)[0]);
}

export default getAllDates;
