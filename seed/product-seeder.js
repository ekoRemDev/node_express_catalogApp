var Product = require('../models/product');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node_express_catalogApp', {
    useNewUrlParser: true
});


var products =[
    new Product(
        {
            prodId:1,
            imagePath: "/images/cupcake0.jpg",
            title: "Chocolate - Cup Cake of The Cup Cake",
            description: "This is the best cup cake in the Town",
            price: 4,
        }),
    new Product(
        {
            prodId:2,
            imagePath: "/images/cupcake0.jpg",
            title: "Orange - Cup Cake of The Cup Cake",
            description: "This is the best cup cake in the Town",
            price: 5,
        }),
    new Product(
        {
            prodId:3,
            imagePath: "/images/cupcake0.jpg",
            title: "Strawberry - Cup Cake of The Cup Cake",
            description: "This is the best cup cake in the Town",
            price: 3,
        }),
    new Product(
        {
            prodId:4,
            imagePath: "/images/cupcake0.jpg",
            title: "Apple - Cup Cake of The Cup Cake",
            description: "This is the best cup cake in the Town",
            price: 6,
        }),
    new Product(
        {
            prodId:5,
            imagePath: "/images/cupcake0.jpg",
            title: "Just - Cup Cake of The Cup Cake",
            description: "This is the best cup cake in the Town",
            price: 2,
        })
];





var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
