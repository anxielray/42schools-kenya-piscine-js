// tell-me-how-many.mjs

import fs from 'fs'; // Import the file system module
import path from 'path'; // Import the path module

// Access the command-line arguments directly
const directoryPath = process.argv[2] || '.'; // Use current directory if no argument is provided

// Function to count the number of entries in a directory
function countEntries(directory) {
  // Read the contents of the directory asynchronously
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error("Error reading the directory:", err.message);
      process.exit(1);
    }

    // Count the number of entries and print the result
    const entryCount = files.length; // Number of files and directories in the directory
    console.log(entryCount);
  });
}

// Normalize the path to handle relative or absolute paths correctly
const normalizedPath = path.resolve(directoryPath);

// Call the function to count entries in the specified directory
countEntries(normalizedPath);
