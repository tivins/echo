// server.js
import http from "http";
import path from "path";
import fs from "fs";
import url from "url";
import { fileURLToPath } from "url";
import { exec } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get root folder from arguments or use current directory
const ROOT = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();
const PORT = process.argv[3] || 8000;

const mimeTypes = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
};

const server = http.createServer((req, res) => {
  
  const parsedUrl = url.parse(req.url);

  let pathname = path.join(ROOT, parsedUrl.pathname);

  fs.stat(pathname, (err, stats) => {
    if (err) {
      console.error("File not found:", err.message);
      res.statusCode = 404;
      res.end("Not Found");
      return;
    }

    if (stats.isDirectory()) {
      pathname = path.join(pathname, "index.html");
    }

    fs.readFile(pathname, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Internal Server Error");
        return;
      }

      const ext = path.extname(pathname);
      res.setHeader("Content-Type", mimeTypes[ext] || "application/octet-stream");
      res.end(data);
    });
  });
});


// Function to check if port is in use and kill the process
function checkAndKillPort(port) {
  return new Promise((resolve) => {
    const command = `netstat -ano | findstr :${port}`;
    
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(`Port ${port} is available`);
        resolve();
        return;
      }
      
      if (stdout.trim()) {
        console.log(`Port ${port} is already in use. Killing process...`);
        
        // Extract PID from netstat output
        const lines = stdout.trim().split('\n');
        const pids = new Set();
        
        lines.forEach(line => {
          const parts = line.trim().split(/\s+/);
          if (parts.length >= 5) {
            const pid = parts[parts.length - 1];
            if (pid && pid !== '0') {
              pids.add(pid);
            }
          }
        });
        
        // Kill processes
        pids.forEach(pid => {
          exec(`taskkill /PID ${pid} /F`, (killError) => {
            if (killError) {
              console.log(`Could not kill process ${pid}: ${killError.message}`);
            } else {
              console.log(`Killed process ${pid}`);
            }
          });
        });
        
        // Wait a bit for processes to be killed
        setTimeout(resolve, 1000);
      } else {
        console.log(`Port ${port} is available`);
        resolve();
      }
    });
  });
}

// Check and kill any process using port 3000 before starting server
checkAndKillPort(PORT).then(() => {
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/ serving folder ${ROOT}`);
  });
});
