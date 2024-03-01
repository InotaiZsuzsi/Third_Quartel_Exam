import http from "http"

function demo() {
    console.log("demo")
}

const server = http.createServer((req, res) => {
    demo();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Hello World!',
    }));
  });

  server.listen(4213)