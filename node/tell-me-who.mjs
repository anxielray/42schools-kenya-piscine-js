// tell-me-who.mjs

import fs from 'fs'; // Import the file system module
import path from 'path'; // Import the path module

// Access the command-line arguments directly
const directoryPath = process.argv[2]; // Get the directory path from the argument

// Check if the directory path is provided
if (!directoryPath) {
  console.log("Please provide a directory path as an argument.");
  process.exit(1);
}

// Function to read guests from the directory and print their names
function listGuests(directory) {
  // Read the contents of the directory asynchronously
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error("Error reading the directory:", err.message);
      process.exit(1);
    }

    // Extract names from the files and filter for .json extension
    const guestNames = files.filter(file => path.extname(file) === '.json').map(file => {
      const nameWithoutExtension = path.basename(file, '.json'); // Remove the .json extension
      const [firstname, lastname] = nameWithoutExtension.split('_'); // Split on underscore
      return {
        firstname,
        lastname
      };
    });

    // Sort the names alphabetically by last name, then first name
    const sortedGuests = guestNames.sort((a, b) => {
      const lastNameComparison = a.lastname.localeCompare(b.lastname); // Compare last names
      if (lastNameComparison !== 0) return lastNameComparison; // Sort by last name
      return a.firstname.localeCompare(b.firstname); // Sort by first name if last names are equal
    });

    // Print the formatted guest names
    sortedGuests.forEach((guest, index) => {
      console.log(`${index + 1}. ${guest.lastname} ${guest.firstname}`); // Format as "Number. Lastname Firstname"
    });
  });
}

// Call the function to list guests
listGuests(directoryPath);
