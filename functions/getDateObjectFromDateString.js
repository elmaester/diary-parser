function getDateObjectFromDateString(dateString) {
  const [month, day, year] = dateString.split("/");
  return { year, month: parseInt(month), day: parseInt(day) };
}
exports.getDateObjectFromDateString = getDateObjectFromDateString;
