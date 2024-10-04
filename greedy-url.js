/*Create 3 functions, which accept a string which we'll refer to as the dataSet.
Your function should return an array of strings.

    getURL: returns all URLs present in the dataSet.
    greedyQuery: returns URLs from the dataSet, with at least 3 query parameters.
    notSoGreedy: returns URLs from the dataSet, with at least 2, but not more then 3 query parameters.

Example dataSet:

qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?y*/

function getURL(dataSet) {
  const urlRegex = /https?:\/\/[^\s]+/g;
  const urls = dataSet.match(urlRegex);
  return urls || [];
}

function greedyQuery(dataSet) {
  const urlRegex = /https?:\/\/[^\s?]+(\?([^=&]+=[^&]*&){2}[^=&]+=[^&]*)/g;
  const urls = dataSet.match(urlRegex);
  return urls || [];
}

function notSoGreedy(dataSet) {
  const urlRegex = /https?:\/\/[^\s?]+(\?([^=&]+=[^&]*&){1,2}[^=&]+=[^&]*)/g;
  const urls = dataSet.match(urlRegex);
  return urls || [];
}
