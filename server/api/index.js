var models = require('../models')
const app = require('express')()
module.exports = { path: '/api', handler: app }

// const test = require('./test')
// const getExperts = require('./experts/get')
// const postExperts = require('./experts/post')
// const signIn = require('./sign-in')

// app.use(test)
// app.use(getExperts)
// app.use(postExperts)
// app.use(signIn)


app.get('/hello', (req, res) => {
    models.User.findAll({
        include: [models.Task]
    }).then(function (users) {
        res.send(users)
    });
});

app.post('/create', function (req, res) {
    models.User.create({
        username: req.body.username
    }).then(function () {
        res.redirect('/');
    });
});

app.post('/:user_id/tasks/create', function (req, res) {
    models.Task.create({
        title: req.body.title,
        UserId: req.params.user_id
    }).then(function () {
        res.redirect('/');
    });
});