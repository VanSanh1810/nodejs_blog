const newsRouter = require('./news');
const courseRouter = require('./course');

function route(app) {
    app.use('/', newsRouter);

    app.use('/course', courseRouter);

    
    app.post('/', (req, res) => {
        console.log(req.body);
        res.send('');
    });
}

module.exports = route;
