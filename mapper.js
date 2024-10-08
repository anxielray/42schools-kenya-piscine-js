/* 
    Create a map function that takes an array as the first argument, a function as second, and that works like the method .map

    Create a flatMap function that takes an array as the first argument, a function as second, and that works like the method .flatMap
 */

function map(arr, callback) {
  return arr.map(callback);
}

function flatMap(arr, callback) {
  return arr.flatMap(callback);
}
