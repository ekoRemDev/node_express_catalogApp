var Category = require('../models/category');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node_express_catalogApp', {
    useNewUrlParser: true
});


var categories =[
    new Category(
        {
            categoryImage: "/images/category/cake.jpg",
            categoryTitle: "Cake",
            categoryDescription: "This is the best Cake"
        }),
    new Category(
        {
            categoryImage: "/images/category/cakepop.jpg",
            categoryTitle: "Cakepop",
            categoryDescription: "This is the best Cakepop"
        }),
    new Category(
        {
            categoryImage: "/images/category/cookie.jpg",
            categoryTitle: "Cookie",
            categoryDescription: "This is the best Cookie"
        }),
    new Category(
        {
            categoryImage: "/images/category/cupcake.jpg",
            categoryTitle: "Cupcake",
            categoryDescription: "This is the best Cupcake"
        })
];





var done = 0;
for (var i = 0; i < categories.length; i++) {
    categories[i].save(function(err, result) {
        done++;
        if (done === categories.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
