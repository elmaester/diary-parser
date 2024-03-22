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

export default mergeDatesAndEntries;
