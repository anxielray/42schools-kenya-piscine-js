function groupPrice(price) {
  let result = [];
  let regex = price.match(/(([A-Z]{3})|\$)([0-9]+\.[0-9]+)/g);

  if (regex === null) return result;
  regex.forEach((regx, i) => {
    result.push([regx]);
    result[i].push(regx.match(/[0-9]+/g)[0]);
    result[i].push(regx.match(/[0-9]+/g)[1]);
  });
  return result;
}

console.log(groupPrice("The price of the cereals is $4.00.")); // Output: [['$4.00', '4', '00']]
// /\d{1}/;
// console.log(groupPrice("EUR100.99 and GBP45"));
// console.log(groupPrice("No prices here."));
