const express = require('express');
const route = express.Router();

const courseController = require('../app/controllers/CourseController');

// newsController.index
route.get('/create', courseController.createCourse);
route.get('/:slug', courseController.findCourse);
route.get('/', courseController.index);

module.exports = route;