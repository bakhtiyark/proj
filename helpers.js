const { mainPageMarkup, submitSuccessMarkup } = require('./views');

const todos = [];

const postForm = (req, res) => {
    const { item } = req.body
    todos.push(item)
    console.log(item)
    res.send(submitSuccessMarkup);
};

const getMainPage = (req, res) => {
    res.send(mainPageMarkup);
};

module.exports = {
    postForm,
    getMainPage
};
