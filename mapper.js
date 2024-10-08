/* 
    Create a map function that takes an array as the first argument, a function as second, and that works like the method .map

    Create a flatMap function that takes an array as the first argument, a function as second, and that works like the method .flatMap
 */

function map(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

function flatMap(arr, callback) {
  return arr.reduce(
    (acc, val, i, arr) => acc.concat(callback(val, i, arr)),
    []
  );
}
