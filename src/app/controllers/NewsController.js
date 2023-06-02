const Course = require('../models/Course')
class NewsController {
    async index(req, res) {

        // res.render('home');

        const query = Course.find({});
        // Query hasn't been executed yet, so Mongoose hasn't casted the filter.
        query.getFilter();
  
        const doc = await query.exec();
        res.json(doc);
    }
}

module.exports = new NewsController();
