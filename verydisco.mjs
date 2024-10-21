const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Please provide a string as an argument.");
  process.exit(1);
}

const inputString = args[0];
const words = inputString.split(' ');

// Function to transform each word
function makeVeryDisco(word) {
  // Check if the word is "discovery"
  if (word.toLowerCase() === 'discovery') {
    return 'verydisco';
  }

  // For other words, cut and reverse them
  const midIndex = Math.ceil(word.length / 2); // Calculate mid index rounded up
  const firstHalf = word.slice(0, midIndex);   // Get the first half
  const secondHalf = word.slice(midIndex);      // Get the second half
  return secondHalf + firstHalf;                // Concatenate in reverse order
}

// Process each word and create the resulting array
const discoWords = words.map(makeVeryDisco);

const result = discoWords.join(' ');

console.log(result);
