const is = {};
is.num = function (value) {
  if (typeof value === "number" && !is.nan(value)) {
    return true;
  } else if (is.nan(value)) {
    return true;
  }
  return false;
};

is.nan = function (value) {
  return Number.isNaN(value);
};

is.str = function (value) {
  return typeof value === "string";
};

is.bool = function (value) {
  return typeof value === "boolean";
};

is.undef = function (value) {
  return value === undefined;
};

is.def = function (value) {
  return value !== undefined;
};

is.arr = function (value) {
  return Array.isArray(value);
};

is.obj = (value) =>
  value !== null &&
  typeof value === "object" &&
  !Array.isArray(value) &&
  !(value instanceof Function);

is.fun = function (value) {
  return typeof value === "function";
};

is.truthy = function (value) {
  return !!value;
};

is.falsy = function (value) {
  return !is.truthy(value);
};

is.null = function (value) {
  return value === null;
};
