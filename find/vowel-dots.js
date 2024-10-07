/*Create a function named vowelDots that receives a string. Your function should return a new string with a . after every vowel.

Your RegEx should be stored in a variable named vowels.*/

let vowels = /[aeiou]/gi;
function vowelDots(str) {
  return str.replace(vowels, (match) => match + ".");
}

// console.log(vowelDots("Hello World"));
