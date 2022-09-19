// routes/users.js

/*
    всякий код для создания роутеров и т.п.
*/
app.use('/films', require('./routes/films'));

const User = require('../models/user');

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.send({ data: user }))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
});

// найти первое совпадение с полем name равным "Стас Басов"
User.findOne({ name: 'Стас Басов' });
// найти всех тридцатилетних
User.find({ age: 30 });

// найти вообще всех
User.find({});
