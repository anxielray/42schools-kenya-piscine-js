// const hashCode = (str) =>
//   (
//     [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
//   ).toString(36);

function blockChain(data, prev = { index: 0, hash: "0" }) {
  const hash = hashCode(`${prev.index + 1}${prev.hash}${JSON.stringify(data)}`);

  return {
    index: prev.index + 1,
    hash,
    data,
    prev,
    chain: (newData) => blockChain(newData, { index: prev.index + 1, hash }), // Use updated reference
  };
}

// // Test the blockChain function
// const first = blockChain({ a: 1 });
// console.log(first.index); // 1
// console.log(first.data); // { a: 1 }
// console.log(first.prev); // { index: 0, hash: '0' }
// console.log(first.hash); // Should output '1103f27'

// const second = first.chain({ hello: "world" });
