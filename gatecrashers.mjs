import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const PORT = 5000;
const GUESTS_DIR = 'guests';
const AUTHORIZED_USERS = {
  'Caleb_Squires': 'abracadabra',
  'Tyrique_Dalton': 'abracadabra',
  'Rahima_Young': 'abracadabra'
};

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return sendResponse(res, 500, { error: 'server failed' });
  }

  // Check Basic Authentication
  const authHeader = req.headers['authorization'];
  if (!authHeader || !validateAuth(authHeader)) {
    res.writeHead(401, { 'WWW-Authenticate': 'Basic' });
    return res.end(JSON.stringify({ error: 'Authorization Required' }));
  }

  // Get the guest name from the URL
  const guestName = req.url.substring(1);
  if (!guestName) {
    return sendResponse(res, 500, { error: 'server failed' });
  }

  try {
    // Ensure the guests directory exists
    await fs.mkdir(GUESTS_DIR, { recursive: true });

    // Read the request body
    const body = await getRequestBody(req);

    // Create or update the guest file
    const filePath = path.join(GUESTS_DIR, `${guestName}.json`);
    await fs.writeFile(filePath, body);

    // Try to parse the body as JSON for the response
    let responseData;
    try {
      responseData = JSON.parse(body);
    } catch (jsonError) {
      // If parsing fails, send the raw body
      responseData = body;
    }

    // Return the body and status 200
    sendResponse(res, 200, responseData);
  } catch (err) {
    console.error('Error:', err);
    sendResponse(res, 500, { error: 'server failed' });
  }
});

function sendResponse(res, statusCode, data) {
  res.writeHead(statusCode);
  res.end(JSON.stringify(data));
}

// Function to read the request body
function getRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

// Function to validate Basic Authentication
function validateAuth(authHeader) {
  // The Authorization header is in the format "Basic <base64encodedUser:password>"
  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  // Check if the username and password match the authorized list
  return AUTHORIZED_USERS[username] && AUTHORIZED_USERS[username] === password;
}

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
