const router = require('express').Router();
const Film = require('../models/film');

   
const { getFilms, createFilm } = require('../controllers/films');

router.get('/', getFilms); 
router.post('/', createFilm); 

module.exports = router;
