function findIP(input) {
  const ipPattern =
    /(?!(((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}):(?!(?![7-9]\d\d\d\d)(?!6[6-9]\d\d\d)(?!65[6-9]\d\d)(?!655[4-9]\d)(?!6553[6-9])(?!0+)(\d{1,5})))((((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4})(?::(?![7-9]\d\d\d\d)(?!6[6-9]\d\d\d)(?!65[6-9]\d\d)(?!655[4-9]\d)(?!6553[6-9])(?!0+)(\d{1,5}))?)/g;

  const matches = input.match(ipPattern);

  return matches || [];
}

// console.log(findIP(s));
