const http = require("http");
const port = 7070;

const server = http.createServer((request, response) => {
  if (request.method === "POST") {
    let body = "";
    request.on("data", chunk => {
      body += chunk.toString();
    });
    request.on("end", () => {
      console.log("Received data:", body);
      response.end();
    });
  } else {
    response.end();
  }
});

server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
