/*Create a function named get which takes two arguments:

    src: an object.
    path: a string representing a path.

Your function will return the value at the given path in the src object.*/

function get(src, path) {
  if (path === "") {
    return src;
  }
  let keys = path.split(".");
  let current = src;

  for (let key of keys) {
    if (current[key] === undefined) {
      return undefined;
    }
    current = current[key];
  }

  return current;
}
