function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash | 0; //hash & hash;
  }
  return hash.toString(); //Math.abs(hash);
}

function blockChain(data, prev = { index: 0, hash: "0" }) {
  const block = {
    index: index + 1,
    data: data,
    prev: prev,
    get hash() {
      return hashCode(this.indes + this.prev.hash + JSON.stringify(this.data));
    },
  };
  return block;
}
