function findIP(s) {
  const ipPattern =
    /(?<!\d)(?!0)([1-9]\d{0,2}|0)(?<![1-9]\d{0,2})(\.(?!0)([1-9]\d{0,2}|0)(?<![1-9]\d{0,2})){3}(?::(6553[0-5]|655[0-2]\d|64[0-9]{3}|[0-5][0-9]{0,4}|[1-5][0-9]{0,4}|[1-9][0-9]{0,4}|[0-9]{0,4}))?(?!\d)/g;

  const matches = s.match(ipPattern) || [];

  return matches.filter((ip) => {
    const parts = ip.split(":");
    if (parts.length > 2) return false;

    const ipPart = parts[0];
    const portPart = parts[1];

    // Validate IP
    const ipSegments = ipPart.split(".");
    if (ipSegments.length !== 4) return false;

    for (const segment of ipSegments) {
      if (
        segment.length === 0 ||
        segment.length > 3 ||
        Number(segment) > 255 ||
        (segment.length > 1 && segment[0] === "0")
      ) {
        return false;
      }
    }

    if (portPart) {
      const port = parseInt(portPart, 10);
      if (isNaN(port) || port < 0 || port > 65535) {
        return false; // invalid port
      }
    }

    return true; // valid IP and port (if present)
  });
}

const inputString =
  "Here are some IPs: 192.168.0.1, 255.255.255.255:8080, 10.0.0.256, 172.16.0.1:65536, 127.0.0.1, 192.168.1.1:80";
console.log(findIP(inputString));
