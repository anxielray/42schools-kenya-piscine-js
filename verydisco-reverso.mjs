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
  // For other words, we need to split the word into halves
  const midIndex = Math.floor(transformedWord.length / 2); // Use Math.floor for splitting
  const firstHalf = transformedWord.slice(0, midIndex); // Get the first half
  const secondHalf = transformedWord.slice(midIndex); // Get the second half

  // Reconstruct the original word by swapping halves
  return secondHalf + firstHalf;
}

// Read the content of the file asynchronously
fs.readFile(fileName, 'utf8', (err, content) => {
  if (err) {
    console.error("Error reading the file:", err.message);
    process.exit(1);
  }

  // Remove any extra whitespace and only work with the first line or trimmed content
  const transformedWord = content.trim(); 

  // Reverse the transformation on the single word
  const result = reverseVeryDisco(transformedWord);

  // Print the result in the console
  console.log(result);
});
