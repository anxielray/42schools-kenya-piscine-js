const is = {
  num: function (value) {
    return typeof value === "number";
  },
  nan: function (value) {
    return value !== value;
  },
  str: function (value) {
    return typeof value === "string";
  },
  bool: function (value) {
    return typeof value === "boolean";
  },
  undef: function (value) {
    return value === undefined;
  },
  def: function (value) {
    return value !== undefined;
  },
  arr: Array.isArray,
  obj: function (value) {
    return value !== null && typeof value === "object";
  },
  fun: function (value) {
    return typeof value === "function";
  },
  truthy: function (value) {
    return !!value;
  },
  falsy: function (value) {
    return !value;
  },
};
