function pronoun(str) {
  const pronouns = ["i", "you", "he", "she", "it", "they", "we"];
  const result = {};
  const words = str.split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (pronouns.includes(word)) {
      const nextWord = words[i + 1];
      if (!result[word]) {
        result[word] = { word: [], count: 0 };
      }
      result[word].count++;
      if (nextWord && !result[word].word.includes(nextWord)) {
        if (!pronouns.includes(nextWord)) {
          result[word].word.push(nextWord);
        }
      }
    }
  }
  return result;
}

const ex =
  "Using Array Destructuring, you you can iterate through objects easily.";
console.log(pronoun(ex));
// Expected output: { you: { word: [ 'can' ], count: 2 } }

// const ex = 'If he you want to buy something you have to pay.'

// {
//   he: { word: [], count: 1}
//   you: { word: [ 'want', 'have' ], count: 2 }
// }
