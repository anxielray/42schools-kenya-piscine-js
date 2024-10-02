// Round function
function round(x) {
  let integerPart = x < 0 ? -(-x | 0) : x | 0; // Equivalent to Math.floor() for positive and Math.ceil() for negative
  let decimalPart = x - integerPart;

  if (decimalPart >= 0.5) {
    return integerPart + 1;
  }
  return integerPart;
}

function ceil(x) {
  let integerPart = x < 0 ? -(-x | 0) : x | 0;
  if (x === integerPart) {
    return integerPart;
  }
  return integerPart + 1;
}

function floor(x) {
  return x < 0 ? -(-x | 0) : x | 0;
}

function trunc(x) {
  return x < 0 ? -(-x | 0) : x | 0;
}

// console.log(round(4.5));
// console.log(round(4.4));
// console.log(round(-4.5));
// console.log(round(-4.4));

// console.log(ceil(4.1));
// console.log(ceil(-4.1));
// console.log(ceil(4.0));

// console.log(floor(4.9));
// console.log(floor(-4.9));
// console.log(floor(4.0));

// console.log(trunc(4.9));
// console.log(trunc(-4.9));
// console.log(trunc(4.0));
