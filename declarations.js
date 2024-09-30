const escapeStr = 'Anxile\'s, "World`s", /!\\';
const arr = [4, "2"];
const obj = {
  str: "Hello, World!",
  num: 10,
  bool: true,
  undef: undefined,
};
const nested = {
  arr: [4, undefined, "2"],
  obj: {
    str: "Hello, World!",
    num: 10,
    bool: true,
    undef: undefined,
  },
};
Object.freeze(nested);
Object.freeze(nested.arr);
Object.freeze(nested.obj);
