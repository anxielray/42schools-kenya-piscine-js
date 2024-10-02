function pyramid(str, height) {
    if (height < 1) {
      return "";
    }else if (height === 1) {
        return str;
    }
    if (str.length === 0) {
      return "";
    }
  let result = "";
  for (let row = 1; row <= height; row++) {
    const spaces = " ".repeat(height - row);
    str = str.repeat(2 * row - 1);
    if (row !== height) {
      result += spaces + str + "\n";
    } else {
      result += spaces + str;
    }
  }
  return result;
}

console.log(pyramid("w", 10));
