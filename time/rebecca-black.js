/* Create the following functions which accept a Date:

    isFriday: returns true if the Date is a Friday.
    isWeekend: returns true if the Date is a weekend day.
    isLeapYear: returns true if the year of the Date is a leap year.
    isLastDayOfMonth: returns true if the Date represents the last day of the month.
 */

function isFriday(date) {
  const dayOfWeek = date.getDay();
  return dayOfWeek === 5;
}

function isWeekend(date) {
  const dayOfWeek = date.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6;
}

function isLeapYear(date) {
  const year = new Date(date).getFullYear();
  return year % 4 === 0;
}

function isLastDayOfMonth(date) {
  if (!isLeapYear(date)) {
    if (new Date(date).getMonth() !== 1) {
      if (
        new Date(date).getMonth() !== 0 &&
        new Date(date).getMonth() !== 4 &&
        new Date(date).getMonth() !== 6 &&
        new Date(date).getMonth() !== 9 &&
        new Date(date).getMonth() !== 11
      ) {
        return new Date(date).getDate() === 30;
      } else if (
        new Date(date).getMonth() !== 3 &&
        new Date(date).getMonth() !== 5 &&
        new Date(date).getMonth() !== 8 &&
        new Date(date).getMonth() !== 10
      ) {
        return new Date(date).getDate() === 31;
      }
    } else {
      return new Date(date).getDate() === 28;
    }
  } else {
    if (new Date(date).getMonth() !== 1) {
      if (
        new Date(date).getMonth() !== 0 &&
        new Date(date).getMonth() !== 2 &&
        new Date(date).getMonth() !== 4 &&
        new Date(date).getMonth() !== 6 &&
        new Date(date).getMonth() !== 9 &&
        new Date(date).getMonth() !== 11
      ) {
        return new Date(date).getDate() === 30;
      } else {
        return new Date(date).getDate() === 31;
      }
    } else {
      if (new Date(date).getDate() > 29) {
        return false;
      }
      return new Date(date).getDate() === 29;
    }
  }
}
// console.log(isFriday(new Date('2014-08-29')));
// console.log(isLeapYear(new Date('2004-08-29')));
// console.log(isLastDayOfMonth("2020-02-31"));
// console.log(new Date("2020-02-20").getMonth());
