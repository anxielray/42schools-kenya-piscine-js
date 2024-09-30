const arrToSet = (arr) => new Set(arr);
const arrToStr = (arr) => arr.toString();
const setToArr = (set) => [...set];
const setToStr = (set) => `[${Array.from(set).toString()}]`;
const strToArr = (str) => str.split(",").map((item) => item.trim());
const strToSet = (str) => new Set(strToArr(str));
const mapToObj = (map) =>
  Array.from(map).reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
const objToArr = (obj) => Object.entries(obj);
const objToMap = (obj) => new Map(Object.entries(obj));
const arrToObj = (arr) =>
  arr.reduce((obj, item, index) => ({ ...obj, [index]: item }), {});
const strToObj = (str) => JSON.parse(str);

const superTypeOf = (value) => {
  if (value instanceof Map) {
    return "Map";
  } else if (value instanceof Set) {
    return "Set";
  } else {
    return typeof value;
  }
};

console.log(superTypeOf(new Set([1, 2, 3])));
