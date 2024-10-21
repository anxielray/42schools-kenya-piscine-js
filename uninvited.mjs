import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 5000;
const GUESTS_DIRECTORY = './guests';

// Create the guests directory if it doesn't exist
if (!fs.existsSync(GUESTS_DIRECTORY)) {
  fs.mkdirSync(GUESTS_DIRECTORY);
}

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const guestName = req.url.substring(1); // Extract guest name from URL
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString(); // Accumulate data chunks
    });

    req.on('end', () => {
      try {
        const guestData = JSON.parse(body); // Parse incoming JSON data
        const guestFileName = `${guestName}.json`;
        const filePath = path.join(GUESTS_DIRECTORY, guestFileName);

        // Write the guest data to a JSON file
        fs.writeFile(filePath, JSON.stringify(guestData, null, 2), (err) => {
          if (err) {
            console.error('Error writing file:', err); // Log the error
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'server failed' }));
            return;
          }

          // Respond with the created guest data
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(guestData));
        });
      } catch (error) {
        console.error('Error parsing JSON:', error); // Log the error
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'server failed' }));
      }
    });
  } else {
    // Handle unsupported HTTP methods
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'server failed' }));
  }
});

// Start the server and log the listening port
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
