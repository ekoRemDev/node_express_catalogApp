// Todo 11 - Create a route for home.ejs
// exports.home = (req, res)=>{
//     res.render('home');
// res.send('aaaa');
// };

// Default Project Name for Header menu
const projectName = "Catalog App";
const copyright = ' 2018 EkoRemDev@gmail.com';
// Todo 20 - create an instance of product.json
// const productJSON = require('../product');
// const products = productJSON.products;



const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/node_express_catalogApp');
const db = mongoose.connection;



// Todo 13 We are editing routes
exports.home = (req, res) => {

    var viewAmount = 0;
    var sesid = req.sessionID;
    if (req.session.page_views) {
        viewAmount = req.session.page_views++;
        // res.send(req.session.page_views);
    } else {
        req.session.page_views = 1;
        // viewAmount = 1;
        // res.send("Welcome to this page for the first time!");
    }

    // Todo 35 - We cancel data from json and get data from mongo
    const product = require('../models/product');
    db.model('products').find({'mainPageShow': true}, (err, data)=>{
        productsFromDb = data;

        res.render('home', {
            title: 'Delectable delights for special occasions',
            slogan: 'Sweets. Treats. Celebrations. Tastefully sweet. Playfully unique. Make people happy… Serve more... Cupcakes, cookies, cake pops, and more. Cupcakes make people happy.',
            projectName: projectName,
            copyright: copyright,
            // products: products,
            productsFromDb: productsFromDb,
            viewAmount: viewAmount,
            sesid: sesid
        });
    });



};

exports.about = (req, res) => {
    res.render('about', {
        title: 'About Us',
        slogan: 'Sweets. Treats. Celebrations. Tastefully sweet. Playfully unique. Make people happy… Serve more... Cupcakes, cookies, cake pops, and more. Cupcakes make people happy.',
        projectName: projectName,
        copyright: copyright,
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
        ;
    }

    res.render('product_single', {
        title: 'Product Detail Title',
        projectName: projectName,
        copyright: copyright,
        searchResults: searchResults,
    });
};

exports.notFound = (req, res) => {
    res.render('notFound', {
        title: 'Not Found Title',
        slogan: 'Sweets. Treats. Celebrations. Tastefully sweet. Playfully unique. Make people happy… Serve more... Cupcakes, cookies, cake pops, and more. Cupcakes make people happy.',
        projectName: projectName,
        copyright: copyright,
    });
};

exports.login = (req, res) => {
    res.render('login', {
        title: 'Login Title',
        projectName: projectName,
        copyright: copyright,
    });
};

exports.contact = (req, res) => {
    res.render('contact', {
        title: 'Contact Us',
        slogan: 'Sweets. Treats. Celebrations. Tastefully sweet. Playfully unique. Make people happy… Serve more... Cupcakes, cookies, cake pops, and more. Cupcakes make people happy.',
        projectName: projectName,
        copyright: copyright,
    });
};

exports.favorite = (req, res) => {

    const favorite = {
        userId: 1,
        prodId: req.params.id,
        sesId: req.sessionID
    };
    const favorites = [];
    favorites.push(favorite);


    db.collection('favorites').insert(favorite);
    // res.redirect('/product_single/' + req.params.id);
    res.redirect('/favorites');

};

exports.products = (req, res) => {
    const products = require('../models/product');
    db.model('products').find((err, data) => {
        let productsFromDb = data;

        res.render('products', {
            title: 'Products',
            projectName: projectName,
            copyright: copyright,
            productsFromDb: productsFromDb,
        });
    });

};

exports.categories = (req, res) => {
    const categories = require('../models/category');
    db.model('categories').find((err, data) => {
        let categoriesFromDb = data;

        res.render('categories', {
            title: 'Delectable delights for special occasions',
            projectName: projectName,
            copyright: copyright,
            categoriesFromDb: categoriesFromDb,
        });
    });

};

exports.favorites = (req, res) => {
<<<<<<< HEAD

    const favorites = require('../models/favorites');


    db.model('favorites').find({'sesId': req.sessionID}, (err, data) => {
        favoritesFromDb = data;

        res.render('favorites', {
            title: 'Favorites Delectable delights for special occasions',
            projectName: projectName,
            copyright: copyright,
            favoritesFromDb: favoritesFromDb
        });



    });



    // db.model('favorites').find({'sesId': req.sessionID}, (err, data) => {
    //     favoritesFromDb = data;
    //
    //     for (var i = 0; i < favoritesFromDb.length; i++) {
    //         console.log(favoritesFromDb[i].prodId);
    //
    //         const product = require('../models/product');
    //         db.model('products').find({'prodId': favoritesFromDb[i].prodId}, (err, prod) => {
    //             const productFromQuery = prod;
    //             // console.log(productFromQuery[0].title)
    //             res.render('favorites', {
    //                 title: 'Favorites Delectable delights for special occasions',
    //                 projectName: projectName,
    //                 copyright: copyright,
    //                 // favoritesFromDb: favoritesFromDb,
    //                 productFromQuery: productFromQuery
    //             });
    //         });
    //     };
    //
    // });
};

exports.product = (req,res)=>{
    const product = require('../models/product');
    const requiredId = req.params.id;

    db.model('products').find({'prodId': requiredId}, (err, data) => {
        productFromDb = data;

        res.render('product', {
            title: 'Favorites Delectable delights for special occasions',
            projectName: projectName,
            copyright: copyright,
            productFromDb: productFromDb
        });
=======


    res.render('favorites', {
        title: 'Favorites Delectable delights for special occasions',
        projectName: projectName,
        copyright: copyright,
>>>>>>> 6f4fe43be80065fbc987d499f70f59fced5b9740
    });

    // const favorites = require('../models/favorites');
    // db.model('favorites').find({'sesId': req.sessionID}, (err, data) => {
    //     favoritesFromDb = data;
    //
    //     for (var i = 0; i < favoritesFromDb.length; i++) {
    //         console.log(favoritesFromDb[i].prodId);
    //
    //         const product = require('../models/product');
    //         db.model('products').find({'prodId': favoritesFromDb[i].prodId}, (err, prod) => {
    //             const productFromQuery = prod;
    //             // console.log(productFromQuery[0].title)
    //             res.render('favorites', {
    //                 title: 'Favorites Delectable delights for special occasions',
    //                 projectName: projectName,
    //                 copyright: copyright,
    //                 // favoritesFromDb: favoritesFromDb,
    //                 productFromQuery: productFromQuery
    //             });
    //         });
    //     };
    //
    // });
};