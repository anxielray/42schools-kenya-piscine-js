// tell-me-vip.mjs

import fs from 'fs'; // Import the file system module
import path from 'path'; // Import the path module

// Access the command-line arguments directly
const directoryPath = process.argv[2]; // Get the directory path from the argument

// Check if the directory path is provided
if (!directoryPath) {
  console.log("Please provide a directory path as an argument.");
  process.exit(1);
}

// Function to filter VIP guests and save to vip.txt
function filterVIPGuests(directory) {
  // Read the contents of the directory asynchronously
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error("Error reading the directory:", err.message);
      process.exit(1);
    }

    // Array to hold VIP guests
    const vipGuests = [];

    // Read each JSON file
    files.forEach(file => {
      if (path.extname(file) === '.json') {
        const filePath = path.join(directory, file); // Get the full path to the file
        const content = fs.readFileSync(filePath, 'utf8'); // Read the file synchronously
        const guest = JSON.parse(content); // Parse the JSON content

        // Check if the answer is "YES"
        if (guest.answer && guest.answer.toUpperCase() === 'YES') {
          // Extract the name from the file name
          const nameWithoutExtension = path.basename(file, '.json'); // Remove the .json extension
          const [firstname, lastname] = nameWithoutExtension.split('_'); // Split on underscore
          vipGuests.push({
            firstname,
            lastname
          });
        }
      }
    });

    // Sort the VIP guests alphabetically by last name, then first name
    const sortedVIPs = vipGuests.sort((a, b) => {
      const lastNameComparison = a.lastname.localeCompare(b.lastname); // Compare last names
      if (lastNameComparison !== 0) return lastNameComparison; // Sort by last name
      return a.firstname.localeCompare(b.firstname); // Sort by first name if last names are equal
    });

    // Prepare the output format
    const outputLines = sortedVIPs.map((guest, index) => {
      return `${index + 1}. ${guest.lastname} ${guest.firstname}`; // Format as "Number. Lastname Firstname"
    });

    // Write the output to vip.txt
    fs.writeFile('vip.txt', outputLines.join('\n'), (err) => {
      if (err) {
        console.error("Error writing to vip.txt:", err.message);
        process.exit(1);
      }
      console.log(`VIP guest list saved to vip.txt.`);
    });
  });
}

// Call the function to filter VIP guests
filterVIPGuests(directoryPath);
