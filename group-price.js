function groupPrice(price) {
  let result = [];
  const regex = /(\D+)(\d+)(?:\.(\d{1,2}))?/g;

  let match;
  while ((match = regex.exec(price)) !== null) {
    result.push([match[0], match[2], match[3] || "00"]);
  }

  return result;
}

// console.log(groupPrice("USD12.31"));
// console.log(groupPrice("EUR100.99 and GBP45"));
// console.log(groupPrice("No prices here."));
