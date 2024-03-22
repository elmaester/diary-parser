import { dateHeaderRegex } from "../regex.mjs";

function getAllEntries(entireText) {
  return entireText.split(dateHeaderRegex).slice(1);
}

export default getAllEntries;
