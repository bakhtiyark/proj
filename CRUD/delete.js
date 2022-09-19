// routes/users.js

// ...

const User = require('../models/user');

router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(user => res.send({ data: user }))
        .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
});


// удалим пользователя на основе имени
User.findOneAndRemove({ name: 'Стас Басов' });


// удалим всех тридцатилетних
User.deleteMany({ age: 30 });
