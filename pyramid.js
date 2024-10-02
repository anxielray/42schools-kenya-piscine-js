function pyramid(character, height) {
  let result = "";
  for (let i = 0; i < height; i++) {
    if (i === 0) {
      let sp = " ".repeat(height - 1);
      result += sp + character + "\n";
      continue;
    }
    let numCharacters = 1 + i * 2;
    let spaces = " ".repeat(height - i - 1);
    let row = character.repeat(numCharacters).trim();
    if (i < height-1) {
      result += spaces + row + "\n";
    } else {
      result += spaces + row;
    }
  }
  return result;
}

console.log(pyramid("a", 5));
