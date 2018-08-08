var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var favorites = new Schema({
    userId: {type: Number, required: true},
    prodId: {type: String, required: true},
    sesId: {type: String, required: true},
});

module.exports = mongoose.model('favorites', favorites);

