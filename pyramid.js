function pyramid(character, height) {
  let result = "";
  for (let i = 0; i < height; i++) {
    if (i === 0) {
      let sp = " ".repeat(height);
      result += sp + character + "\n";
      continue;
    }
    let numCharacters = 1 + i * 2;
    let spaces = " ".repeat(height - i - 1);
    let row = (character + " ").repeat(numCharacters).trim();
    result += spaces + row + "\n";
  }
  return result;
}

// console.log(pyramid("a", 5));
