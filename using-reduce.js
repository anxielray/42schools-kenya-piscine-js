/* Create functions : 

    adder: accepts an array of numbers, and returns the sum as a number.

    sumOrMul: accepts an array of numbers and adds or multiplies its elements depending on whether the element is odd or even. Even = multiply. Odd = add.

    funcExec: accepts an array of functions and executes them using reduce, returning the result.
*/

function adder(arr, num) {
  return arr.reduce((acc, curr) => acc + curr, num === undefined ? 0 : num);
}

function sumOrMul(arr, value) {
  return arr.reduce(
    (acc, curr) => {
      if (curr % 2 === 0) {
        return acc * curr;
      } else {
        return acc + curr;
      }
    },
    value === undefined ? 0 : value
  );
}

function funcExec(arr, value) {
  return arr.reduce(
    (acc, curr) => {
      if (typeof curr === "function") {
        return curr(acc, value);
      } else {
        return acc;
      }
    },
    value === undefined ? null : value
  );
}
