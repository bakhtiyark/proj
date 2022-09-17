const http = require('http');
const { generateMainView } = require('./views');

const fs = require('fs');
const path = require("path")

const { PORT = 3000 } = process.env;

const server = http.createServer((req, res) => {
  const dataPath = path.join(__dirname, 'data.json');
  fs.readFile(dataPath, { encoding: "utf8" }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const songs = JSON.parse(data);
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    
  const markup = generateMainView(songs);
  res.end(markup);
  })
});

server.listen(PORT);