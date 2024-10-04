/*Create a function named sameAmount, that takes three arguments: a string, and 2 regular expressions. Your function should return a boolean.

The objective is to confirm that the regular expressions match the string the same number of times.*/

function sameAmount(str, regex1, regex2) {
  const matches1 = str.match(regex1);
  const count1 = matches1 ? matches1.length : 0;

  const matches2 = str.match(regex2);
  const count2 = matches2 ? matches2.length : 0;

  return count1 === count2;
}

// const data = "q qqq q qqqqq q q";
// console.log(sameAmount(data, /q /g, /qqqqqqq/g));
// console.log(sameAmount(data, /q /g, /q/g));
