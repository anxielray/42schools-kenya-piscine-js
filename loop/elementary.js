/*Create 3 functions which each take (a, b) as arguments:

    multiply that acts like the * operator, without using it.
    divide that acts like the integer division operator /, without using it.
    modulo that acts like the % operator, without using it.
*/
  
function multiply(a, b) {
  let result = 0;
  for (let i = 1; i <= Math.abs(b); i++) {
    result += Math.abs(a);
  }
  if (b < 0) {
    result = -result;
  }
  if (a < 0) {
    result = -result;
  }
  return result;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  let result = 0;
  let sign = (a < 0 && b > 0) || (a > 0 && b < 0) ? -1 : 1;
  a = Math.abs(a);
  b = Math.abs(b);
  while (a >= b) {
    result++;
    a -= b;
  }
  return multiply(sign, result);
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error("Cannot modulo by zero");
  }
  return a - multiply(divide(a, b), b);
}

console.log(multiply(-21, -4));
