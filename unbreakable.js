function split(string, separator, limit) {
  if (separator === undefined) {
    return [string];
  }

  const result = [];
  let startIndex = 0;

  if (separator === "") {
    for (let i = 0; i < string.length; i++) {
      result.push(string[i]);
    }
    return result;
  }

  while (startIndex < string.length) {
    const separatorIndex = string.indexOf(separator, startIndex);

    if (separatorIndex === -1) {
      result.push(string.slice(startIndex));
      break;
    }

    result.push(string.slice(startIndex, separatorIndex));

    startIndex = separatorIndex + separator.length;

    if (limit !== undefined && result.length >= limit) {
      result.push(string.slice(startIndex));
      break;
    }
  }

  if (startIndex >= string.length && result[result.length - 1] !== "") {
    result.push("");
  }

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
