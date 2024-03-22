function getDateObjectFromDateString(dateString) {
  const [month, day, year] = dateString.split("/");
  return { year, month, day };
}

export default getDateObjectFromDateString;
