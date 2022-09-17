const fs = require('fs');

const reader = fs.createReadStream('./in.txt', { encoding: 'utf8' });
const writer = fs.createWriteStream('./out.txt', { encoding: 'utf8' });

reader.on('data', (data) => {
  writer.write(data);
});

reader.on('end', (data) => {
  writer.end();
});

// повесим обработчик события error
reader.on('error', (err) => {
  console.log(err);
});


/// Pipe
const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  req.pipe(fs.createWriteStream(`./out-${Math.random()}.txt`));
});

server.listen(3000);

/*
fileReader.pipe(res)
*/