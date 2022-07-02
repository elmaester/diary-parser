const { getDateObjectFromDateString } = require("./getDateObjectFromDateString");

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
exports.convertDiaryArrayToOrderedObject = convertDiaryArrayToOrderedObject;
