import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const PORT = 5000;
const GUESTS_DIR = path.resolve('guests');
const AUTHORIZED_USERS = {
  'Caleb_Squires': 'abracadabra',
  'Tyrique_Dalton': 'abracadabra',
  'Rahima_Young': 'abracadabra'
};

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  // Only allow POST requests
  if (req.method !== 'POST') {
    return sendResponse(res, 500, { error: 'server failed' });
  }

  // Handle authentication
  const authHeader = req.headers['authorization'];
  if (!authHeader || !isAuthorized(authHeader)) {
    res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Access to guests"' });
    return res.end(JSON.stringify({ error: 'Authorization Required' }));
  }

  // Extract guest name from the URL
  const guestName = req.url.substring(1);
  if (!guestName) {
    return sendResponse(res, 500, { error: 'server failed' });
  }

  try {
    // Ensure the guests directory exists
    await fs.mkdir(GUESTS_DIR, { recursive: true });

    // Parse the request body
    const body = await getRequestBody(req);
    let parsedBody;
    try {
      parsedBody = JSON.parse(body);
    } catch (err) {
      return sendResponse(res, 500, { error: 'Invalid JSON' });
    }

    // Write the data to the corresponding guest file
    const filePath = path.join(GUESTS_DIR, `${guestName}.json`);
    await fs.writeFile(filePath, JSON.stringify(parsedBody, null, 2));

    // Respond with the parsed body
    sendResponse(res, 200, parsedBody);
  } catch (error) {
    console.error('Error:', error);
    sendResponse(res, 500, { error: 'server failed' });
  }
});

function isAuthorized(authHeader) {
  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');
  return AUTHORIZED_USERS[username] === password;
}

function sendResponse(res, statusCode, data) {
  res.writeHead(statusCode);
  res.end(JSON.stringify(data));
}

function getRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
