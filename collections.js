const arrToSet = (arr) => new Set(arr);
const arrToStr = (arr) => arr.join("");
const setToArr = (set) => [...set];
const setToStr = (set) => `${Array.from(set).join("")}`;
const strToArr = (str) => str.split("");
const strToSet = (str) => new Set(strToArr(str));
const mapToObj = (map) =>
  Array.from(map).reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
const objToArr = (obj) => Object.values(obj);
const objToMap = (obj) => new Map(Object.entries(obj));
const arrToObj = (arr) =>
  arr.reduce((obj, item, index) => ({ ...obj, [index]: item }), {});
const strToObj = (str) =>
  Array.from(str).reduce((obj, char, index) => ({ ...obj, [index]: char }), {});
const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
const superTypeOf = (value) => {
  if (value instanceof Map) {
    return "Map";
  } else if (value instanceof Set) {
    return "Set";
  } else if (Array.isArray(value)) {
    return "Array";
  } else if (value === null) {
    return "null";
  } else if (value === undefined){
    return "undefined";
  }else{
    return capitalize(typeof value);
  }
};
