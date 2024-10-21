import http from 'http';
import fs from 'fs';
import path from 'path';

// Set the port number
const PORT = 5000;

// Create the server
const server = http.createServer((req, res) => {
    // Only handle POST requests
    if (req.method === 'POST') {
        // Extract the guest name from the URL
        const guestName = req.url.slice(1); // Remove the leading '/'

        // Collect the data from the request body
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // Convert Buffer to string
        });

        req.on('end', () => {
            // Create the file path for the guest
            const filePath = path.join(__dirname, `${guestName}.json`);

            // Write the data to the JSON file
            fs.writeFile(filePath, body, 'utf8', (err) => {
                if (err) {
                    // If there's an error, respond with 500
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'server failed' }));
                    return;
                }

                // If successful, respond with 201 and the content
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(body);
            });
        });
    } else {
        // If not a POST request, respond with 404
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

// Start listening on the specified port
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
