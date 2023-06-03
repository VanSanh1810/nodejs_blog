const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../util/mongoose')

class CourseController {
    index(req, res, next) {

        // res.render('home');

        Course.find({})
            .then(course => {
                res.render('course',{course: multipleMongooseToObject(course)}); //
            })
            .catch(err => next(err));
    }

    findCourse(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course => res.json(course))
            .catch(err => next(err));
    }

    createCourse(req, res, next) {
        res.render('course/create');
    }

}

module.exports = new CourseController();