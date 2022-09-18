const express = require('express');
// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();

app.listen(PORT, () => {
    // Если всё работает, консоль покажет, какой порт приложение слушает
    console.log(`App listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    // логика обработки запроса
});

app.get('/', (req, res) => {
    res.send(
        `<html>
          <body>
              <p>Ответ на сигнал из далёкого космоса</p>
          </body>
          </html>`
    );
});

res.send('немного текста'); //  Content-Type: text/plain
res.send('<p>немного html</p>'); //  Content-Type: text/plain
res.send({ some: 'json' }); //  Content-Type: application/json

app.get('/', (req, res) => {
    res.status(404).send('<h1>Страница не найдена</h1>');
  });