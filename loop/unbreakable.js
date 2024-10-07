function split(string, separator) {
  let result = [];
  let startIndex = 0;

  if (separator === "") {
    for (let i = 0; i < string.length; i++) {
      result.push(string[i]);
    }
    return result;
  }

  for (let i = 0; i <= string.length; i++) {
    if (i === string.length || string[i] === separator[0]) {
      let match = true;
      for (let j = 0; j < separator.length; j++) {
        if (string[i + j] !== separator[j]) {
          match = false;
          break;
        }
      }

      if (match) {
        result.push(string.slice(startIndex, i));
        startIndex = i + separator.length;
        i += separator.length - 1;
      }
    }
  }

  result.push(string.slice(startIndex));

  return result;
}

function join(array, separator = ",") {
  let result = "";

  for (let i = 0; i < array.length; i++) {
    result += String(array[i]);

    if (i < array.length - 1) {
      result += separator;
    }
  }

  return result;
}
console.log(split("rrrr", "rr"));
