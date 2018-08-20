var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var products = new Schema({
    prodId:{type: Number, required: true},
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    votes: {type: String, required: false},
    mainPageShow: {type: Boolean, required: false},
});

module.exports = mongoose.model('products', products);

// Todo 29 - Create a seed to seed some default data
// create seed folder and file product-seeder.js
