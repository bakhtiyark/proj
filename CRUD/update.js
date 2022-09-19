// routes/users.js

// ...

const User = require('../models/user');

router.patch('/:id', (req, res) => {
    // обновим имя найденного по _id пользователя
    User.findByIdAndUpdate(req.params.id, { name: 'Виктор Гусев' })
        .then(user => res.send({ data: user }))
        .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
});

// найти первое совпадение с полем name равным "Стас Басов" и заменить имя на "Виктор Гусев"
User.findOneAndUpdate({ name: 'Стас Басов' }, { name: 'Виктор Гусев' });

// найти все совпадения с полем name равным "Стас Басов" и заменить имя на "Виктор Гусев"
User.update({ name: 'Стас Басов' }, { name: 'Виктор Гусев' });

User.findByIdAndUpdate(req.params.id, { name: 'Виктор Гусев' })
    // user здесь — это документ до обновления
    .then(user => res.send({ data: user }));



User.findByIdAndUpdate(
    req.params.id,
    { name: 'Виктор Гусев' },
    // Передадим объект опций:
    {
        new: true, // обработчик then получит на вход обновлённую запись
        runValidators: true, // данные будут валидированы перед изменением
        upsert: true // если пользователь не найден, он будет создан
    }
)
    .then(user => res.send({ data: user }))
    .catch(user => res.send({ "Данные не прошли валидацию. Либо произошло что-то совсем немыслимое" }));