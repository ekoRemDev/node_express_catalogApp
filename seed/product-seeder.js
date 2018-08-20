var Product = require('../models/product');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node_express_catalogApp', {
    useNewUrlParser: true
});


var products =[
    new Product(
        {
            prodId:1,
<<<<<<< HEAD
            imagePath: "/images/cupcake1.jpg",
            title: "Chocolate - Cup Cake of The Cup Cake 01",
            description: "This is the best cup cake in the Town 01",
=======
            imagePath: "/images/cupcake0.jpg",
            title: "Chocolate - Cup Cake of The Cup Cake",
            description: "This is the best cup cake in the Town",
>>>>>>> 6f4fe43be80065fbc987d499f70f59fced5b9740
            price: 4,
            votes:'91% of buyers enjoyed this product! (101 votes)',
            mainPageShow : true
        }),
    new Product(
        {
            prodId:2,
<<<<<<< HEAD
            imagePath: "/images/cupcake2.jpg",
            title: "Orange - Cup Cake of The Cup Cake 02",
            description: "This is the best cup cake in the Town 02",
=======
            imagePath: "/images/cupcake0.jpg",
            title: "Orange - Cup Cake of The Cup Cake",
            description: "This is the best cup cake in the Town",
>>>>>>> 6f4fe43be80065fbc987d499f70f59fced5b9740
            price: 5,
            votes:'91% of buyers enjoyed this product! (102 votes)',
            mainPageShow : false
        }),
    new Product(
        {
            prodId:3,
<<<<<<< HEAD
            imagePath: "/images/cupcake3.jpg",
            title: "Strawberry - Cup Cake of The Cup Cake 03",
            description: "This is the best cup cake in the Town 03",
=======
            imagePath: "/images/cupcake0.jpg",
            title: "Strawberry - Cup Cake of The Cup Cake",
            description: "This is the best cup cake in the Town",
>>>>>>> 6f4fe43be80065fbc987d499f70f59fced5b9740
            price: 3,
            votes:'91% of buyers enjoyed this product! (103 votes)',
            mainPageShow : true
        }),
    new Product(
        {
            prodId:4,
<<<<<<< HEAD
            imagePath: "/images/cupcake4.jpg",
            title: "Apple - Cup Cake of The Cup Cake 04",
            description: "This is the best cup cake in the Town 04",
=======
            imagePath: "/images/cupcake0.jpg",
            title: "Apple - Cup Cake of The Cup Cake",
            description: "This is the best cup cake in the Town",
>>>>>>> 6f4fe43be80065fbc987d499f70f59fced5b9740
            price: 6,
            votes:'91% of buyers enjoyed this product! (104 votes)',
            mainPageShow : false
        }),
    new Product(
        {
            prodId:5,
<<<<<<< HEAD
            imagePath: "/images/cupcake5.jpg",
            title: "Just - Cup Cake of The Cup Cake 05",
            description: "This is the best cup cake in the Town 05",
=======
            imagePath: "/images/cupcake0.jpg",
            title: "Just - Cup Cake of The Cup Cake",
            description: "This is the best cup cake in the Town",
>>>>>>> 6f4fe43be80065fbc987d499f70f59fced5b9740
            price: 2,
            votes:'91% of buyers enjoyed this product! (105 votes)',
            mainPageShow : true
        }),
    new Product(
        {
            prodId:6,
            imagePath: "/images/cupcake6.jpg",
            title: "Chocolate - Cup Cake of The Cup Cake 06",
            description: "This is the best cup cake in the Town 06",
            price: 4,
            votes:'91% of buyers enjoyed this product! (106 votes)',
            mainPageShow : false
        }),
    new Product(
        {
            prodId:7,
            imagePath: "/images/cupcake7.jpg",
            title: "Orange - Cup Cake of The Cup Cake 07",
            description: "This is the best cup cake in the Town 07",
            price: 5,
            votes:'91% of buyers enjoyed this product! (107 votes)',
            mainPageShow : true
        }),
    new Product(
        {
            prodId:8,
            imagePath: "/images/cupcake8.jpg",
            title: "Strawberry - Cup Cake of The Cup Cake 08",
            description: "This is the best cup cake in the Town 08",
            price: 3,
            votes:'91% of buyers enjoyed this product! (108 votes)',
            mainPageShow : false
        }),
    new Product(
        {
            prodId:9,
            imagePath: "/images/cupcake9.jpg",
            title: "Apple - Cup Cake of The Cup Cake 09",
            description: "This is the best cup cake in the Town 09",
            price: 6,
            votes:'91% of buyers enjoyed this product! (109 votes)',
            mainPageShow : false
        }),
    new Product(
        {
            prodId:10,
            imagePath: "/images/cupcake10.jpg",
            title: "Just - Cup Cake of The Cup Cake 10",
            description: "This is the best cup cake in the Town 10",
            price: 2,
            votes:'91% of buyers enjoyed this product! (110 votes)',
            mainPageShow : false
        }),
    new Product(
        {
            prodId:11,
            imagePath: "/images/cupcake11.jpg",
            title: "Just - Cup Cake of The Cup Cake 11",
            description: "This is the best cup cake in the Town 11",
            price: 2,
            votes:'91% of buyers enjoyed this product! (111 votes)',
            mainPageShow : true
        }),
    new Product(
        {
            prodId:12,
            imagePath: "/images/cupcake12.jpg",
            title: "Just - Cup Cake of The Cup Cake 12",
            description: "This is the best cup cake in the Town 12",
            price: 2,
            votes:'91% of buyers enjoyed this product! (112 votes)',
            mainPageShow : false
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
