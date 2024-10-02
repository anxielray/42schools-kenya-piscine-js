function customSlice(array, start = 0, end = array.length) {
  if (start < 0) {
    start = Math.max(array.length + start, 0);
  }
  if (end < 0) {
    end = Math.max(array.length + end, 0);
  }

  start = Math.min(start, array.length);
  end = Math.min(end, array.length);

  const newArray = [];

  for (let i = start; i < end; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}
