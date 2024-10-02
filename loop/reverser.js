function reverse(input) {
  if (Array.isArray(input)) {
    for (let i = 0; i < Math.floor(input.length / 2); i++) {
      const temp = input[i];
      input[i] = input[input.length - 1 - i];
      input[input.length - 1 - i] = temp;
    }
    return input;
  }

  if (typeof input === "string") {
    const charArray = input.split("");

    for (let i = 0; i < Math.floor(charArray.length / 2); i++) {
      const temp = charArray[i];
      charArray[i] = charArray[charArray.length - 1 - i];
      charArray[charArray.length - 1 - i] = temp;
    }

    return charArray.join("");
  }

  return input;
}
