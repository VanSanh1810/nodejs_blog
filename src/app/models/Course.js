const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: {type: String, maxLength: 600},
    description: {type: String, maxLength: 600},
    image: {type: String, maxLength: 600},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
  });

  module.exports = mongoose.model('Course', Course);