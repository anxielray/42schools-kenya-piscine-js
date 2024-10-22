// friend-support.mjs

import http from 'http'; // Import the HTTP module
import fs from 'fs'; // Import the file system module
import path from 'path'; // Import the path module

const PORT = 5000; // Set the port to 5000
const GUESTS_DIRECTORY = './guests'; // Change this to your guests directory

// Create the HTTP server
const server = http.createServer((req, res) => {
  const guestName = req.url.slice(1); // Remove the leading slash to get the guest name

  if (req.method === 'GET' && guestName) {
    const filePath = path.join(GUESTS_DIRECTORY, `${guestName}.json`); // Construct the file path

    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          // File not found
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: "guest not found" })); // Update this line
        } else {
          // Server error
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: "server failed" }));
        }
      } else {
        // File found, send the content as JSON
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(content); // Send the JSON content directly
      }
    });
  } else {
    // Handle 404 for any other routes
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: "guest not found" })); // Ensure consistency here as well
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
