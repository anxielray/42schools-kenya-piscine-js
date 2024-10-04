function findIP(input) {
  const ipPattern =
    /(?:\b(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/g;

  const matches = input.match(ipPattern);

  return matches || [];
}
