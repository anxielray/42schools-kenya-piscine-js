/*Create a function named ionOut, that receives a string and returns an array with every
word containing 'ion' following a 't'. The words should be returned without the 'ion' part.*/

function ionOut(str) {
  let words = str.split(/[.,\s]/g);
  let result = [];

  for (let word of words) {
    if (/tion/.test(word)) {
      result.push(word.slice(0, -3));
    }
  }

  return result;
}
// console.log(ionOut('attention, direction'));
// console.log(ionOut('direction'));
