function findIP(str) {
  const regex =
    /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:[0-9]{1,5})?\b/g;

  const matches = str.match(regex);

  return matches
    ? matches.filter((ip) => {
        const portMatch = ip.match(/:(\d{1,5})$/);
        if (portMatch) {
          const port = parseInt(portMatch[1], 10);
          return port >= 0 && port <= 65535;
        }
        return true;
      })
    : [];
}

console.log(
  findIP(
    "These are the IPs: 192.168.0.1, 256.256.256.256, 10.0.0.1:8080, 172.16.254.1:65536, 172.16.254.1:65000."
  )
);
