/* Create the following functions which accept a Date:

    isFriday: returns true if the Date is a Friday.
    isWeekend: returns true if the Date is a weekend day.
    isLeapYear: returns true if the year of the Date is a leap year.
    isLastDayOfMonth: returns true if the Date represents the last day of the month.
 */

function isFriday(date) {
  const dayOfWeek = date.getDay();
  return dayOfWeek === 4;
}

function isWeekend(date) {
  const dayOfWeek = date.getDay();
  return dayOfWeek === 5 || dayOfWeek === 6;
}

function isLeapYear(date) {
    const year = date.getFullYear();
  return year % 4 === 0;
}

function isLastDayOfMonth(date) {
    const nextDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  return nextDate.getDate() === date.getDate();
}