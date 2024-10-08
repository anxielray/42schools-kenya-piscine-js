/* Create the following functions, which each take an array as the first argument, and a function as the second argument.

    filter: that works like the [].filter method.

    reject: that works like the reject function from lodash.

    partition: that works like the partition function from lodash.

 */

function filter(array, callback) {
  let result = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

function reject(array, callback) {
  let result = [];
  for (var i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

function partition(array, callback) {
  return [filter(array, callback), reject(array, callback)];
}
