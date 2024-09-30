  is.num =  function (value) {
    return typeof value === "number";
  },
  is.nan = function (value) {
    return value !== value;
  },
  is.str = function (value) {
    return typeof value === "string";
  },
  is.bool = function (value) {
    return typeof value === "boolean";
  },
  is.undef = function (value) {
    return value === undefined;
  },
  is.def = function (value) {
    return value !== undefined;
  },
  is.arr = function(value) {
    return Array.isArray(value);
  };
  is.obj = function (value) {
    return value !== null && typeof value === "object";
  },
  is.fun = function (value) {
    return typeof value === "function";
  },
  is.truthy = function (value) {
    return !!value;
  },
  is.falsy = function (value) {
    return !value;
  };
