const newsRouter = require('./news');

function route(app) {
    app.use('/', newsRouter);

    app.use('/', (req, res) => {
        res.render('home');
    });

    app.post('/', (req, res) => {
        console.log(req.body);
        res.send('');
    });
}

module.exports = route;
