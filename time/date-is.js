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
  if (date instanceof Date && dateToCompare instanceof Date && date) {
    return date.getTime() > dateToCompare.getTime();
  } else if (typeof date === "string") {
    return date > dateToCompare;
  } else if (typeof date === "number" && typeof dateToCompare === "number") {
    return date > dateToCompare;
  }
}
// console.log(isAfter('2022-02-10', '2023-01-01'));

function isBefore(date, dateToCompare) {
  if (date instanceof Date && dateToCompare instanceof Date && date) {
    return date.getTime() < dateToCompare.getTime();
  } else if (typeof date === "string") {
    return date < dateToCompare;
  } else if (typeof date === "number" && typeof dateToCompare === "number") {
    return date < dateToCompare;
  }
  return false;
}

function isFuture(date) {
  if (!isValid(date)) {
    return false;
  }
  if (new Date(date).getTime() > Date.now()) {
    return true;
  }
  return false;
}

function isPast(date) {
    if (!isValid(date)) {
        return false;
      }
      if (new Date(date).getTime() < Date.now()) {
        return true;
      }
      return false;
}

function isValid(date) {
  if (date instanceof Date) {
    return !isNaN(date.getTime());
  }
  if (typeof date === "number") {
    const timestampDate = new Date(date);
    return !isNaN(timestampDate.getTime());
  }
  if (typeof date === "string") {
    return false;
  }
  return false;
}
// console.log(isValid("2013-01-01"));
// console.log(isValid(Date.now()));
