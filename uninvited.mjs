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
    const guestName = req.url.substring(1);
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const guestData = JSON.parse(body);
        const guestFileName = `${guestName}.json`;
        const filePath = path.join(GUESTS_DIRECTORY, guestFileName);

        fs.writeFile(filePath, JSON.stringify(guestData, null, 2), (err) => {
          if (err) {
            console.error('Error writing file:', err); // Log the error
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'server failed' }));
            return;
          }

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
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'server failed' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
