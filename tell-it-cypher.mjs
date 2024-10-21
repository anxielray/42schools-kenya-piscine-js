// tell-it-cypher.mjs

import fs from 'fs'; // Import the file system module
import path from 'path'; // Import the path module

// Access the command-line arguments directly
const filePath = process.argv[2]; // The file to encode/decode
const action = process.argv[3]; // The action: encode or decode
let newFileName = process.argv[4]; // The new file name (optional)

// Check if required arguments are provided
if (!filePath || !action) {
  console.log("Usage: node tell-it-cypher.mjs <filePath> <encode|decode> [newFileName]");
  process.exit(1);
}

// Set default output file names based on the action
if (action === 'encode') {
  newFileName = newFileName || 'cypher.txt'; // Use cypher.txt as default for encoding
} else if (action === 'decode') {
  newFileName = newFileName || 'clear.txt'; // Use clear.txt as default for decoding
} else {
  console.log("Invalid action. Use 'encode' or 'decode'.");
  process.exit(1);
}

// Function to encode the file content
function encodeFile(filePath, outputFile) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading the file:", err.message);
      process.exit(1);
    }

    // Convert the data to Base64
    const encodedData = Buffer.from(data).toString('base64');

    // Write the encoded data to the output file
    fs.writeFile(outputFile, encodedData, (err) => {
      if (err) {
        console.error("Error writing to the file:", err.message);
        process.exit(1);
      }
      console.log(`Encoded data saved to ${outputFile}.`);
    });
  });
}

// Function to decode the file content
function decodeFile(filePath, outputFile) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading the file:", err.message);
      process.exit(1);
    }

    // Convert the Base64 data back to a string
    const decodedData = Buffer.from(data, 'base64').toString('utf8');

    // Write the decoded data to the output file
    fs.writeFile(outputFile, decodedData, (err) => {
      if (err) {
        console.error("Error writing to the file:", err.message);
        process.exit(1);
      }
      console.log(`Decoded data saved to ${outputFile}.`);
    });
  });
}

// Perform the action based on the keyword
if (action === 'encode') {
  encodeFile(filePath, newFileName);
} else if (action === 'decode') {
  decodeFile(filePath, newFileName);
}
