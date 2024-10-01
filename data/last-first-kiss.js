function first(value) {
  return value[0];
}

function last(value) {
  return value[value.length - 1];
}

function kiss(value) {
  let returnArr = [value[value.length - 1], value[0]];
  return returnArr;
}
