import http from "node:http";

const port = Number(process.env.PORT) || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Hello from cursor-test\n");
});

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
