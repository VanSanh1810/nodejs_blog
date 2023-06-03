const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../util/mongoose')
class NewsController {
    index(req, res, next) {

        // res.render('home');

        Course.find({})
            .then(course => {
                res.render('course',{course: multipleMongooseToObject(course)}); //
            })
            .catch(err => next(err));
    }
}

module.exports = new NewsController();
