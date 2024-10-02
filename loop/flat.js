/*Create a function named flat that works like Array.flat(), except its first argument is the array.*/

const flat = (arr, depth = 1) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      result = result.concat(flat(arr[i], depth - 1));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};