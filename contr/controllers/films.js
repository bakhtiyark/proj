const Film = require('../models/film');

module.exports.getFilms = (req, res) => {
  Film.find({})
    .then(films => res.send({ data: films }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.createFilm = (req, res) => {
  const { title, genre } = req.body;

  Film.create({ title, genre })
    .then(film => res.send({ data: film }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};