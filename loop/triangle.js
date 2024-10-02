/*Create a function named triangle that takes a string and a number as arguments. Your function will return a string representing a triangle.

The string will denote the characters which construct the triangle, and the number denotes its height.*/

function triangle(str, height) {
  let result = "";
  if (str.length === 0) {
    return "";
  }
  if (height <= 0) {
    return "";
  } else if (height === 1) {
    return str + "\n";
  }
  for (let i = 0; i < height; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += str;
    }
    result += row + "\n";
  }

  return result.trim();
}

// console.log(triangle("*", 5));
