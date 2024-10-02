/*Create a function named findExpression that takes a number as parameter and returns a string.

    2 constant variables will be made available to your function: add4 and mul2.
    Your goal is to try to find a sequence, starting from the number 1, and repeatedly either adding 4 or multiplying by 2, to produce the number given as a parameter.
    If the number can not be reached you should return undefined

For example, for the number 8, you must first multiply by 2 twice, and then add 4. Your function should return something like: 1 *2 *2 +4.*/

function findExpression(number) {
  let result = "";
  let current = 1;

  while (current < number) {
    if (current * 2 < number) {
      result += current * 2 + " *";
      current *= 2;
    } else if (current + 4 <= number) {
      result += current + " +";
      current += 4;
    } else {
      return undefined;
    }
  }

  return result.slice(0, -1);
}
