function round(x) {
  let sign = false;
  if (x < 0) {
    sign = true;
    x = -1;
  }
  let count = 0;
  while(!(x < 1 && x > -1)){
    x -= 1;
    count++;
  }
  if (x < 0.5){
    if (sign) {
        return -count;
    }else {
        return count;
    }
  }else {
    if (sign) {
        return -count - 1;
    } else {
        return count + 1;
    }
  }
}

function ceil(x) {
  if (x === 0) {
    return 0;
  }
  let integerPart = 0;

  if (x < 0) {
    for (let i = 0; i >= x; i--) {
      integerPart = i;
    }
    return integerPart;
  }
  if (x > 0) {
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
  if (x === 0) {
    return 0;
  }
  let integerPart = 0;

  if (x < 0) {
    for (let i = 0; i < -x; i++) {
      integerPart = -i - 1;
    }
    return integerPart;
  } else {
    for (let i = 0; i <= x; i++) {
      integerPart = i;
    }
  }
  return integerPart;
}

function trunc(x) {
  if (x === 0) {
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
  let preDivide = divide(a, b);
  let postDivide = preDivide * b;
  if (postDivide < 0) {
    postDivide = -postDivide;
    return a + postDivide;
  }
  return a - postDivide;
}

function divide(a, b) {
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
