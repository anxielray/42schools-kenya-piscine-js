/*Create a function named vowelDots that receives a string. Your function should return a new string with a . after every vowel.

Your RegEx should be stored in a variable named vowels.*/

function vowelDots(str) {
  const vowels = /[aeiou]/gi;
  return str.replace(vowels, match => match + ".");
}

// console.log(vowelDots("Hello World"));