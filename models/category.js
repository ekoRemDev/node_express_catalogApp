var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categories = new Schema({
    categoryImage: {type: String, required: true},
    categoryTitle: {type: String, required: true},
    categoryDescription: {type: String, required: true},
});

module.exports = mongoose.model('categories', categories);

// Todo 33 - Create a seed to seed some default data
// create category-seeder.js inside seed folder
