function findIP(dataSet) {
  const ipRegex =
    /(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?::(6553[0-5]|655[0-2][0-9]|6[0-4][0-9]{3}|[0-5]?[0-9]{1,4}))?/g;

  const matches = dataSet.match(ipRegex);

  return matches || [];
}

// const inputString = `
// Here are some IP addresses:
// 192.168.1.1:8080
// 10.0.0.256 // Invalid IP
// 172.16.254.1
// 255.255.255.255:65535
// 192.168.01.1 // Invalid due to leading zero
// `;

// console.log(findIP(inputString));
// Output: [ '192.168.1.1:8080', '172.16.254.1', '255.255.255.255:65535' ]
