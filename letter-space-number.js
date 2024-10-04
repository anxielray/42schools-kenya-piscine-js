/*Create a function named letterSpaceNumber that accepts a string; returning an array with every instance of a letter,
followed by a space, followed by a number, only if that number has only one digit, and is not followed by any letter.*/

function letterSpaceNumber(str) {
  const result = [];
  if (/\w\s\d?/.test(str)&& (/(<=?!)[a-zA-Z]/)) {
    result.push(str.match(/\w\s\d?/)[0]);
  }
  return result;
}

console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'));
// output: ['e 1']
