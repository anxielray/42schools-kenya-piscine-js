/*Create 3 functions which accept an array to be searched, and a value to be matched.

    indexOf: which returns the index of the first occurrence. It also accepts an optional index from where the search should begin. If the value was not found, -1 is returned.
    lastIndexOf: which works just like your indexOf function, but returns the index of the last occurrence.
    includes: which returns true if the value was found in the array, and false otherwise.
*/
function indexOf(array, value, fromIndex = 0) {
  fromIndex = Math.max(
    fromIndex >= 0 ? fromIndex : array.length + fromIndex,
    0
  );

  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function lastIndexOf(array, value, fromIndex = array.length - 1) {
  fromIndex = Math.min(
    fromIndex >= 0 ? fromIndex : array.length + fromIndex,
    array.length - 1
  );

  for (let i = fromIndex; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
