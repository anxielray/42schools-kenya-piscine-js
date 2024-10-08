/* Create functions : 

    adder: accepts an array of numbers, and returns the sum as a number.

    sumOrMul: accepts an array of numbers and adds or multiplies its elements depending on whether the element is odd or even. Even = multiply. Odd = add.

    funcExec: accepts an array of functions and executes them using reduce, returning the result.
*/

function adder(arr ,num = 10) {
  return arr.reduce((acc, curr) => acc + curr, 0)+ num;
}

function sumOrMul(arr) {
  return arr.reduce(
    (acc, curr) => (curr % 2 === 0 ? acc * curr : acc + curr),
    0
  );
}

function funcExec(arr) {
  return arr.reduce(
    (acc, curr) => acc.apply(null, curr),
    Function.prototype.call
  );
}
