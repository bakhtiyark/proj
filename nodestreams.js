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