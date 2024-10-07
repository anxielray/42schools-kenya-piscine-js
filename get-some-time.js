/* Create a function named firstDayWeek, which accepts a specific week in a given year:

    number: representing a week of the year (between 1 and 53).
    string: representing a year.

Your function should return a string representing the date of the first day of that specific week in the format dd-mm-yyyy.

Week 1 is in all cases, the week which contains the 1st of January.

The first day of a week is a Monday.

If the start of the week is in the previous year, then your function should return the first day of the specified year. */

function firstDayWeek(number, year) {
  const date = new Date(`${year}-01-01`);
  const firstDayOfWeek = date.getDay();
  const daysToAdd = (number - 1) * 7 - firstDayOfWeek + 1;
  date.setDate(date.getDate() + daysToAdd);
  let result = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  if (/^[0-9]-/.test(result)) {
    result = "0" + result;
  }
  const regex = new RegExp(/-[0-9]-/, "g");
  if (regex.test(result)) {
    result = result.replace(regex, `-0${date.getMonth() + 1}-`);
  }
  return result;
}
