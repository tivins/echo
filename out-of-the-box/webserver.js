// server.js
import http from "http";
import path from "path";
import fs from "fs";
import url from "url";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Récupère le dossier root depuis les arguments ou prend le dossier courant
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
  console.log(parsedUrl);

  let pathname = path.join(ROOT, parsedUrl.pathname);
  console.log(pathname);

  fs.stat(pathname, (err, stats) => {
    if (err) {
      console.log(err);
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

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/ serving folder ${ROOT}`);
});
