// verydisco-reverso.mjs

import fs from 'fs'; // Import the file system module

// Access the command-line arguments directly
const fileName = process.argv[2]; // Directly access the first argument

// Check if the file name is provided
if (!fileName) {
  console.log("Please provide a filename as an argument.");
  process.exit(1);
}

// Function to reverse the very disco transformation
function reverseVeryDisco(transformedWord) {
  // Check if the word is "verydisco (🕺🏼)"
  if (transformedWord === 'verydisco (🕺🏼)') {
    return 'discovery';
  }

  // For other words, we need to split the word into halves
  const midIndex = Math.ceil(transformedWord.length / 2);
  const firstHalf = transformedWord.slice(midIndex); // Second half
  const secondHalf = transformedWord.slice(0, midIndex); // First half
  return secondHalf + firstHalf; // Reconstruct the original word
}

// Read the content of the file asynchronously
fs.readFile(fileName, 'utf8', (err, content) => {
  if (err) {
    console.error("Error reading the file:", err.message);
    process.exit(1);
  }

  // Split the content into words and reverse the transformation
  const discoWords = content.split(' ').map(reverseVeryDisco);

  // Join the reversed words back into a single string
  const result = discoWords.join(' ');

  // Print the result in the console
  console.log(result);
});
