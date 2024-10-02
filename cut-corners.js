function round(x) {
  if (x == 0) {
    return 0;
  }
  let toWhole = x * 10;
  let decimalPart = modulo(toWhole, 10);
  if (x < 0) {
    if (decimalPart < -4) {
      return ceil(x);
    } else if (decimalPart > -5) {
      return floor(x);
    }
  } else if (x > 0) {
    if (decimalPart > 4) {
      return ceil(x);
    } else if (decimalPart < 5) {
      return floor(x);
    }
  }
}

function ceil(x) {
  if (x == 0) {
    return 0;
  }
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
  if (x == 0) {
    return 0;
  }
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
  if (x == 0) {
    return 0;
  }
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

function modulo(a, b) {
  if (b == 0) {
    return 0;
  }
  let preDivide = divide(a, b);
  let postDivide = preDivide * b;
  if (postDivide < 0) {
    postDivide = -postDivide;
    return a + postDivide;
  }
  return a - postDivide;
}

function divide(a, b) {
  if (b == 0) {
    return 0;
  }
  let result = 0;
  let sign = (a < 0 && b > 0) || (a > 0 && b < 0) ? -1 : 1;
  if (a < 0) {
    a = -a;
  }
  if (b < 0) {
    b = -b;
  }
  while (a >= b) {
    result++;
    a -= b;
  }
  return sign * result;
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

const nums = [3, -4, 2, -3, 0];
// console.log(nums.map(trunc))
// console.log(nums.map(round));
// console.log(nums.map(ceil))
console.log(nums.map(floor));
// */
