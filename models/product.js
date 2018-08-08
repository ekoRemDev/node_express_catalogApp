var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productModel = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
});

model.exports = mongoose.model('Product', productModel);

// Todo 29 - Create a seed to seed some default data
// create seed folder and file ProductSeeder.js
