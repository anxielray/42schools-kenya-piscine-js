/*Create a function named letterSpaceNumber that accepts a string; returning an array with every instance of a letter,
followed by a space, followed by a number, only if that number has only one digit, and is not followed by any letter.*/

function letterSpaceNumber(str) {
  const result = [];
  
  const matches = str.match(/([a-zA-Z]\s\d{1})(?![a-zA-Z0-9])/g);
  
  if (matches) {
    result.push(...matches);
  }
  
  return result;
}

// console.log(letterSpaceNumber('He is 8l or 9 years old, not 10.'));
// Output: ['s 8', 'r 9']
