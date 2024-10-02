function slice(input, start = 0, end = input.length) {
  if (!Array.isArray(input) && typeof input !== "string") {
    throw new TypeError("Input must be an array or a string");
  }

  if (start < 0) {
    start = Math.max(input.length + start, 0);
  }
  if (end < 0) {
    end = Math.max(input.length + end, 0);
  }

  start = Math.min(start, input.length);
  end = Math.min(end, input.length);

  const result = [];

  for (let i = start; i < end; i++) {
    result.push(input[i]);
  }

  return typeof input === "string" ? result.join("") : result;
}

// // For arrays
// const fruits = ['apple', 'banana', 'cherry', 'date'];
// console.log(slice(fruits, 1, 3));
// console.log(slice(fruits, -3, -1));

// // For strings
// const text = 'Hello, world!';
// console.log(slice(text, 4, 12));
// console.log(slice(text, -6));
