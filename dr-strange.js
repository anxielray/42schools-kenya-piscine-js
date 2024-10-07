/* You will create two functions: addWeek and timeTravel.

You have been given a mission to create a new sense of time. Normally a week has 7 days right? Well, that is about to change.

Weeks will instead have 14 days.

Let me explain; this new week will have 14 days, from Monday to Sunday, then secondMonday to secondSunday.

Your purpose is to create a new function named addWeek, that takes a Date as an argument.
Your function should return the weekday as a string, according to our new 14-day week format.
The epoch of our new 14-day week is 0001-01-01, and that was a Monday. */

function addWeek(date) {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "secondMonday",
    "secondTuesday",
    "secondWednesday",
    "secondThursday",
    "secondFriday",
    "secondSaturday",
    "secondSunday",
  ];

  const epoch = new Date("0001-01-01");
  const timeDifference = date - epoch;
  const daysSinceEpoch = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const newDayIndex = daysSinceEpoch % 14;
  return weekDays[newDayIndex];
}

function timeTravel({ date, hour, minute, second }) {
  const newDate = new Date(date);

  newDate.setHours(hour);
  newDate.setMinutes(minute);
  newDate.setSeconds(second);

  return newDate;
}
// console.log(addWeek(new Date("0001-01-01"))); // Output: Monday
// console.log(addWeek(new Date("0001-01-02"))); // Output: Tuesday
// console.log(addWeek(new Date("0001-01-07"))); // Output: Sunday
// console.log(addWeek(new Date("0001-01-08"))); // Output: secondMonday

console.log(addWeek(new Date("0001-01-08"))); // Output: secondTuesday
// timeTravel({ date, hour, minute, second })

// console.log(
//   timeTravel({
//     date: new Date("2020-05-29 23:25:22"),
//     hour: 21,
//     minute: 22,
//     second: 22,
//   }).toString()
// );
// Output: Fri May 29 2020 21:22:22 GMT+0100 (Western European Summer Time)
