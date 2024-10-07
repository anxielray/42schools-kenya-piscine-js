/*Create a function named sameAmount, that takes three arguments: a string, and 2 regular expressions. Your function should return a boolean.

The objective is to confirm that the regular expressions match the string the same number of times.*/

function sameAmount(str, regex1, regex2) {
  let match1 = new RegExp(regex1, "g");
  let match2 = new RegExp(regex2, "g");
  let matches1 = str.match(match1);
  let matches2 = str.match(match2);
  if (matches1 !== null && matches2 !== null) {
    return matches1.length === matches2.length;
  }
}
