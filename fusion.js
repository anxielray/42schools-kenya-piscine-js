function fusion(obj, obj2) {
  const result = {};

  const keys = new Set([...Object.keys(obj), ...Object.keys(obj2)]);

  for (let key of keys) {
    const value1 = obj[key];
    const value2 = obj2[key];

    if (Array.isArray(value1)) {
      result[key] = value1.concat(value2 || []);
    } else if (Array.isArray(value2)) {
      result[key] = (value1 || []).concat(value2);
    } else if (typeof value1 === "string") {
      result[key] = value1 + (value2 ? " " + value2 : "");
    } else if (typeof value2 === "string") {
      result[key] = (value1 || "") + " " + value2;
    } else if (typeof value1 === "number") {
      result[key] = (value1 || 0) + (value2 || 0);
    } else if (typeof value2 === "number") {
      result[key] = (value1 || 0) + value2;
    } else if (typeof value1 === "object" && value1 !== null) {
      result[key] = fusion(value1, value2 || {});
    } else if (typeof value2 === "object" && value2 !== null) {
      result[key] = fusion({}, value2);
    } else {
      result[key] = value2 !== undefined ? value2 : value1;
    }
  }

  return result;
}
// console.log(fusion({ a: "A", b: "B", c: "C" }, { a: "B", b: "C" }));
