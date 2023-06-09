const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

db.connect();

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Templates engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

//Read form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
