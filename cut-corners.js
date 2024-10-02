function round(x) {
  let integerPart = 0;

  if (x < 0) {
    for (let i = 0; i <= -x; i++) {
      integerPart = -i;
    }
  } else {
    for (let i = 0; i <= x; i++) {
      integerPart = i;
    }
  }
  let decimalPart = x - integerPart;

  if (decimalPart >= 0.5) {
    return integerPart + 1;
  }
  return integerPart;
}

function ceil(x) {
  let integerPart = 0;

  if (x < 0) {
    for (let i = 0; i >= x - 1; i--) {
      integerPart = i;
    }
    return integerPart;
  } else {
    for (let i = 0; i <= x; i++) {
      integerPart = i;
    }

    if (integerPart < x) {
      return integerPart + 1;
    }
  }

  return integerPart;
}

function floor(x) {
  let integerPart = 0;

  if (x < 0) {
    for (let i = 0; i <= -x; i++) {
      integerPart = -i;
    }
  } else {
    for (let i = 0; i <= x; i++) {
      integerPart = i;
    }
  }

  return integerPart;
}

function trunc(x) {
  let integerPart = 0;

  if (x < 0) {
    for (let i = 0; i < -x; i++) {
      integerPart = -i;
    }
    return integerPart;
  } else {
    for (let i = 0; i <= x; i++) {
      integerPart = i;
    }
  }

  return integerPart;
}

// console.log(round(4.5));
// console.log(round(4.4));
// console.log(round(-3));
// console.log(round(-4.4));

// console.log(ceil(4.1));
// console.log(ceil(-4.1));
// console.log(ceil(4.0));

// console.log(floor(4.9));
// console.log(floor(-3.9));
// console.log(floor(4.0));

// console.log(trunc(4.9));
// console.log(trunc(-4.9));
// console.log(trunc(10.0));

const nums = [3.7, -3.7, 3.1, -3.1]
console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))
// console.log(nums.map(round))

// Output:

// [ 4, -4, 3, -3 ]
// [ 3, -4, 3, -4 ]
// [ 3, -3, 3, -3 ]
// [ 4, -3, 4, -3 ]
// */