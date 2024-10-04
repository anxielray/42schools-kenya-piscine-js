function getURL(dataSet) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return dataSet.match(urlRegex) || [];
}

function greedyQuery(dataSet) {
  const urls = getURL(dataSet);
  return urls.filter((url) => {
    const queryParams = url.split("?")[1];
    if (queryParams) {
      const params = queryParams.split("&");
      return params.length >= 3;
    }
    return false;
  });
}

function notSoGreedy(dataSet) {
  const urls = getURL(dataSet);
  return urls.filter((url) => {
    const queryParams = url.split("?")[1];
    if (queryParams) {
      const params = queryParams.split("&");
      return params.length >= 2 && params.length <= 3;
    }
    return false;
  });
}
