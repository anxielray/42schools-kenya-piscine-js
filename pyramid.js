function pyramid(character, height) {
  let result = "";
  for (let i = 1; i <= height; i++) {
    let spaces = " ".repeat(height - i);
    let row = (character + " ").repeat(i).trim();
    if (i !== height) {
      result += spaces + row + "\n";
    } else {
      result += spaces + row;
    }
  }
  return result;
}
