const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("<h1>Hello this is shivam 28 Joshi</h1>");
    resp.end();
  })
  .listen(4501);
