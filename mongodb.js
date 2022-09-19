// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { // у пользователя есть имя — опишем требования к имени в схеме:
    type: String, // имя — это строка
    required: true, // оно должно быть у каждого пользователя, так что имя — обязательное поле
    minlength: 2, // минимальная длина имени — 2 символа
    maxlength: 30, // а максимальная — 30 символов
  },
  gender: {
    type: String, // гендер — это строка
    enum: ['м', 'ж', 'другой'] // gender может принимать одно из трёх значений
  },
    age: { // у пользователя есть возраст
        type: Number, // возраст - число
        validate: { // опишем свойство validate
            validator(v) { // validator - функция проверки данных. v - значение свойства age
                return v >= 18; // если возраст меньше 18, вернётся false
            },
            message: 'Вам должно быть больше 18 лет!', // когда validator вернёт false, будет использовано это сообщение
        }
    },
  about: String, // тип — String
});