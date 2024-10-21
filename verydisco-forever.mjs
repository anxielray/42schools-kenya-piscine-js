// verydisco-forever.mjs

import fs from 'fs'; // Import the file system module

// Access the command-line arguments directly
const inputString = process.argv[2]; // Directly access the first argument

// Check if there is at least one argument
if (!inputString) {
  console.log("Please provide a string as an argument.");
  process.exit(1);
}

// Split the input string into words
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

// Join the disco words back into a single string
const result = discoWords.join(' ');

// Write the result to a file
fs.writeFileSync('verydisco-forever.txt', result, 'utf8');

// Optionally log a success message
console.log("Result written to verydisco-forever.txt");
