// Script de diagnostic pour le serveur
const http = require('http');
const fs = require('fs');
const path = require('path');

console.log('=== DIAGNOSTIC SERVEUR ===');
console.log('Timestamp:', new Date().toISOString());
console.log('Node version:', process.version);
console.log('Platform:', process.platform);
console.log('Architecture:', process.arch);
console.log('Working directory:', process.cwd());

// Vérifier les fichiers
const files = ['index.html', 'src/index.ts', 'src/components/echo-button.ts', 'vite.config.ts'];
files.forEach(file => {
  const exists = fs.existsSync(file);
  console.log(`File ${file}: ${exists ? '✓' : '✗'}`);
});

// Test simple serveur HTTP
const server = http.createServer((req, res) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head><title>Debug Server</title></head>
      <body>
        <h1>Serveur de diagnostic actif</h1>
        <p>Timestamp: ${new Date().toISOString()}</p>
        <p>URL: ${req.url}</p>
        <p>Method: ${req.method}</p>
        <p>User-Agent: ${req.headers['user-agent']}</p>
        <p>Host: ${req.headers.host}</p>
        <p>Remote Address: ${req.connection.remoteAddress}</p>
        <p>Local Address: ${req.connection.localAddress}</p>
      </body>
      </html>
    `);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3001, '127.0.0.1', () => {
  console.log('Serveur de diagnostic démarré sur http://127.0.0.1:3001');
  console.log('Testez: http://127.0.0.1:3001');
});

// Arrêter après 30 secondes
setTimeout(() => {
  console.log('Arrêt du serveur de diagnostic');
  server.close();
  process.exit(0);
}, 30000);

