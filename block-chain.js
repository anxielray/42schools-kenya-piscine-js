function blockChain(data, prev = { index: 0, hash: "0" }) {
  const index = prev.index + 1; // Incrementing index based on previous block
  const hash = hashCode(`${index}${prev.hash}${JSON.stringify(data)}`); // Compute hash

  return {
    index,
    hash,
    data,
    prev,
    chain(newData) {
      return blockChain(newData, this); // Create next block
    },
  };
}
