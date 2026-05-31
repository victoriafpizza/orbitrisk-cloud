const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 8080;

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

const server = http.createServer((req, res) => {
  let filePath = req.url === "/" ? "/index.html" : req.url;
  filePath = path.join(__dirname, filePath);

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 - Página não encontrada</h1>");
      return;
    }

    const ext = path.extname(filePath);
    res.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "text/plain"
    });
    res.end(content);
  });
});

server.listen(port, () => {
  console.log(`OrbitRisk Cloud rodando na porta ${port}`);
});