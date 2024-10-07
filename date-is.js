/* 
    isValid: accepts a Date, and returns false if the Date is invalid.
    isAfter: accepts two Date arguments, and returns true if the first is greater then the second.
    isBefore: accepts two Date arguments, and returns true if the second is greater than the first.
    isFuture: accepts a Date, and returns true if the Date is valid, and is after than the present date.
    isPast: accepts a Date, and returns true if the Date is valid, and is before the present date.
 */

// function isValid(date) {
//   if (date instanceof Date) {
//     return !isNaN(date.getTime());
//   }
//   const parsedDate = new Date(date);
//   return !isNaN(parsedDate.getTime());
// }

function isAfter(date, dateToCompare) {
  if (!(date instanceof Date) || !(dateToCompare instanceof Date)) {
    throw new Error("Both arguments must be Date objects");
  }
  return date.getTime() > dateToCompare.getTime();
}

function isBefore(date, dateToCompare) {
  if (!(date instanceof Date) || !(dateToCompare instanceof Date)) {
    throw new Error("Both arguments must be Date objects");
  }
  return date.getTime() < dateToCompare.getTime();
}

function isFuture(date) {
  if (!(date instanceof Date)) {
    throw new Error("The argument must be a Date object");
  }
  const now = new Date();
  return date.getTime() > now.getTime();
}

function isPast(date) {
  if (!(date instanceof Date)) {
    throw new Error("The argument must be a Date object");
  }
  const now = new Date();
  return date.getTime() < now.getTime();
}

function isValid(date) {
  if (date !== Date.now()) {
    return (
      !isNaN(date) &&
      Object.prototype.toString.call(date) === "[object Date]" &&
      !isNaN(date.getTime())
    );
  }else{
    return true;
  }
}
console.log( isValid(new Date('1995-12-17T03:24:00').getTime()))
// console.log(isValid(Date.now()));
