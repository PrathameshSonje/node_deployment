var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    var url = req.url;
    if (url === "/") {
      fs.readFile("src/head.html", function (err, pgres) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.write("HEAD.HTML NOT FOUND");
          res.end();
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(pgres);
          res.end();
        }
      });
    } else if (url === "/tailPage") {
      fs.readFile("src/tail.html", function (err, pgres) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.write("TAIL.HTML NOT FOUND");
          res.end();
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(pgres);
          res.end();
        }
      });
    }
  })
  .listen(3000, function () {
    console.log("SERVER STARTED PORT: 3000");
  });
