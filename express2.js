const path = require('path');
const express = require('express');
const {
  getUsers,
  createUser,
  updateUserProfile,
  deleteUser
} = require('./users');

const { PORT = 3000, BASE_PATH } = process.env;

const app = express();

app.patch('/users/:id', updateUserProfile);
app.post('/users', createUser);
app.get('/users', getUsers);
app.delete('/users/:id', deleteUser);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log('Ссылка на сервер');
  console.log(BASE_PATH);
});


app.get('/users/:id/albums/:album/:photo', (req, res) => {
  const { id, album, photo } = req.params;

    /* При обращению к адресу "http://localhost:3000/users/123/albums/333/2"
     параметры запроса будут записаны в таком виде:
     {"id":"123","album":"333","photo":"2"}

     Мы записали их в переменные id, album и photo */

  res.send(`Мы на странице пользователя с id ${id}, смотрим альбом №${album} и фотографию №${photo}`);
});


// Здесь функциональность точки входа
const express = require('express');

const { PORT = 3000 } = process.env;
const app = express();

// Здесь данные
const users = [
  { name: 'Мария', age: 22 },
  { name: 'Виктор', age: 30 },
  { name: 'Анастасия', age: 48 },
  { name: 'Алексей', age: 51 }
];

// Здесь роутинг
app.get('/users/:id', (req, res) => {
  if (!users[req.params.id]) {
    res.send(`Такого пользователя не существует`);

    // не забудем выйти из функции
    return;
  }

  const { name, age } = users[req.params.id];
  
  res.send(`Пользователь ${name}, ${age} лет`);
}); 

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

const express = require('express');
const router = require('./router.js');
const api = require('./api.js');
const backoffice = require('./backoffice.js');

const { PORT = 3000 } = process.env;
const app = express();

// Для разных запросов разные роутеры.
// Выглядит просто отлично!

app.use('/', router);
app.use('/api', api);
app.use('/admin', backoffice);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});


const mongoose = require('mongoose');


// подключаемся к серверу mongo
mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useCreateIndex: true,
    useFindAndModify: false
});


mongoose.connect('mongodb://localhost:27017/mynewdb');