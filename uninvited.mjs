import http from 'http'; // Import the HTTP module
import fs from 'fs'; // Import the file system module
import path from 'path'; // Import the path module

const PORT = 5000; // Set the port to 5000
const GUESTS_DIRECTORY = './guests'; // Directory where guest files will be stored

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

        // Validate the incoming data
        if (!guestData.answer || !guestData.drink || !guestData.food) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid guest data' }));
          return;
        }

        // Construct the guest file name
        const guestFileName = `${guestName}.json`; // Use the guest name from the URL
        const filePath = path.join(GUESTS_DIRECTORY, guestFileName);

        // Save the new guest to a JSON file (this will overwrite if it exists)
        fs.writeFile(filePath, JSON.stringify(guestData, null, 2), (err) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'server failed' })); // Response for server failure
            return;
          }

          // Respond with 201 Created status and the guest data
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(guestData)); // Return the guest data
        });
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON format' }));
      }
    });
  } else {
    // Handle unsupported methods
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method not allowed' }));
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
