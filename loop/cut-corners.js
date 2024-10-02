function round(x) {
  let sign = false;
  if (x < 0) {
    sign = true;
    x = -x;
  }
  let count = 0;
  while (!(x < 1 && x > -1)) {
    x -= 1;
    count++;
  }
  if (x < 0.5) {
    if (sign) {
      return -count;
    } else {
      return count;
    }
  } else {
    if (sign) {
      return -count - 1;
    } else {
      return count + 1;
    }
  }
}

function ceil(x) {
    if (!x) return 0;
    let sign = false;
    if (x < 0) {
        sign = true;
        x = -x;
    }
    let int = x;
    let count = 0;
  while (!(int < 1 && int >= 0)) {
    int -= 1;
    count++;
  }
  if (sign) {
    return -count;
  } else {
    return count + 1;
  }
}

function floor(x) {
  let sign = false;
  if (x < 0) {
    sign = true;
    x = -x;
  }
  let int = x;
  let count = 0;
  while (!(int < 1 && int > -1)) {
    int -= 1;
    count++;
  }
  if (sign) {
    return -count - 1;
  } else {
    return count;
  }
}

function trunc(x) {
  let count = 0;
  if (x > 0xfffffffff) {
    x -= 0xfffffffff;
    count += 0xfffffffff;
  }
  let sign = false;
  if (x < 0) {
    sign = true;
    x = -x;
  }
  let int = x;
  while (!(int < 1 && int > -1)) {
    int -= 1;
    count++;
  }
  if (sign) {
    return -count;
  } else {
    return count;
  }
}
