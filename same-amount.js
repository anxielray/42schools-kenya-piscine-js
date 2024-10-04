/*Create a function named sameAmount, that takes three arguments: a string, and 2 regular expressions. Your function should return a boolean.

The objective is to confirm that the regular expressions match the string the same number of times.*/

function sameAmount(string, regex1, regex2) {
  const matches1 = string.match(regex1);
  const matches2 = string.match(regex2);

  if (!matches1 && matches2) {
    return false;
  } else if (matches1 && !matches2) {
    return false;
  } else if (!matches1 && !matches2) {
    return true;
  }

  return matches1.length === matches2.length;
}

// const data = "quick brown fox jumps over the lazy dog";
// console.log(sameAmount("data", /q /, /qqqqqqq/));
