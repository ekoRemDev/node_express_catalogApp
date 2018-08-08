// Todo 11 - Create a route for home.ejs
// exports.home = (req, res)=>{
//     res.render('home');
// res.send('aaaa');
// };

// Default Project Name for Header menu
const projectName = "Catalog App";
const copyright = ' 2018 EkoRemDev@gmail.com';
// Todo 20 - create an instance of product.json
const productJSON = require('../product');
const products = productJSON.products;


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/node_express_catalogApp');
const db = mongoose.connection;

// Todo 13 We are editing routes
exports.home = (req, res) => {
    res.render('home', {
        title: 'Delectable delights for special occasions',
        slogan: 'Sweets. Treats. Celebrations. Tastefully sweet. Playfully unique. Make people happy… Serve more... Cupcakes, cookies, cake pops, and more. Cupcakes make people happy.',
        projectName: projectName,
        copyright: copyright,
        products: products,
    });
};

exports.about = (req, res) => {
    res.render('about', {
        title: 'About Us',
        slogan: 'Sweets. Treats. Celebrations. Tastefully sweet. Playfully unique. Make people happy… Serve more... Cupcakes, cookies, cake pops, and more. Cupcakes make people happy.',
        projectName: projectName,
        copyright: copyright
    });
};

exports.product_single = (req, res) => {

    let requiredId = req.params.id;
    let searchResults = [];

    for (let i = 0; i < products.length; i++) {
        let productId = products[i].number;
        if (productId === requiredId) {
            searchResults.push(products[i]);
        }
    }
    ;

    res.render('product_single', {
        title: 'Product Detail Title',
        projectName: projectName,
        copyright: copyright,
        searchResults: searchResults
    });
};

exports.notFound = (req, res) => {
    res.render('notFound', {
        title: 'Not Found Title',
        slogan: 'Sweets. Treats. Celebrations. Tastefully sweet. Playfully unique. Make people happy… Serve more... Cupcakes, cookies, cake pops, and more. Cupcakes make people happy.',
        projectName: projectName,
        copyright: copyright
    });
};

exports.login = (req, res) => {
    res.render('login', {
        title: 'Login Title',
        projectName: projectName,
        copyright: copyright
    });
};

exports.contact = (req, res) => {
    res.render('contact', {
        title: 'Contact Us',
        slogan: 'Sweets. Treats. Celebrations. Tastefully sweet. Playfully unique. Make people happy… Serve more... Cupcakes, cookies, cake pops, and more. Cupcakes make people happy.',
        projectName: projectName,
        copyright: copyright
    });
};

exports.favorite = (req, res) => {

    let requiredId = req.params.id;
    res.send(requiredId);

    // TODO i stopped here i have to create first database and models then i'll continue editing

    // res.render('favorite', {
    //     title: 'favorite',
    //     projectName : projectName,
    //     copyright : copyright
    // });
};

exports.products = (req, res) => {

    const products = require('../models/product');
    db.model('products').find((err,data)=>{
        let productsFromDb = data;

        res.render('products', {
            title: 'Products',
            projectName: projectName,
            copyright: copyright,
            productsFromDb: productsFromDb
        });
    });

};