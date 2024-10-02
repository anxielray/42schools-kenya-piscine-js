/*Create a function named chunk which accepts an array and an integer representing a size.

Your function will chunk the array into sub-arrays, and return an array with each sub-array as its elements. The length of each sub-array is denoted by the size argument.

If the array cannot be split evenly, the last sub-array will contain the remaining elements.*/

function chunk(array, size) {
  let result = [];
  if (size >= array.length) {
    return [array];
  } else if (size < 0) {
    return [];
  } else if (size === 0) {
    return [array.slice(0, array.length)];
  }

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7], 0));
