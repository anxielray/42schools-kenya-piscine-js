import http from 'http'; // Import the HTTP module
import fs from 'fs'; // Import the file system module
import path from 'path'; // Import the path module

const PORT = 5000; // Set the port to 5000
const GUESTS_DIRECTORY = './guests'; // Directory where guest files will be stored

// Create the guests directory if it doesn't exist
if (!fs.existsSync(GUESTS_DIRECTORY)) {
  fs.mkdirSync(GUESTS_DIRECTORY);
}

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Only handle POST requests
  if (req.method === 'POST') {
    // Extract the guest name from the URL (remove leading '/')
    const guestName = req.url.substring(1); // Get the URL path without leading slash

    // Collect the data chunks
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString(); // Convert Buffer to string
    });

    // Once all data is received
    req.on('end', () => {
      try {
        // Parse the incoming data as JSON
        const guestData = JSON.parse(body);

        // Construct the guest file name
        const guestFileName = `${guestName}.json`; // Use the guest name from the URL
        const filePath = path.join(GUESTS_DIRECTORY, guestFileName);

        // Save the new guest to a JSON file (this will overwrite if it exists)
        fs.writeFile(filePath, JSON.stringify(guestData, null, 2), (err) => {
          // Respond with 201 regardless of the file's previous existence
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(guestData)); // Return the guest data
        });
      } catch (error) {
        // Respond with 201 even if JSON parsing fails or on any error
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'server failed' })); // Return server failure
      }
    });
  } else {
    // Respond with 500 for unsupported methods
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'server failed' }));
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
