// Todo 11 - Create a route for home.ejs
// exports.home = (req, res)=>{
//     res.render('home');
    // res.send('aaaa');
// };

// Default Project Name for Header menu
const projectName = "Catalog App";
const copyright = 'Copyright 2018 EkoRemDev@gmail.com'
// Todo 20 - create an instance of product.json
const productJSON = require('../product');
const products = productJSON.products;

// Todo 13 We are editing routes
exports.home = (req, res) => {
    res.render('home', {
        title: 'Delectable delights for special occasions',
        slogan: 'Sweets. Treats. Celebrations. Tastefully sweet. Playfully unique. Make people happy… Serve more... Cupcakes, cookies, cake pops, and more. Cupcakes make people happy.',
        projectName : projectName,
        copyright : copyright,
        products :products,
    });
};

exports.about = (req, res) => {
    res.render('about', {
        title: 'About Us',
        slogan: 'Sweets. Treats. Celebrations. Tastefully sweet. Playfully unique. Make people happy… Serve more... Cupcakes, cookies, cake pops, and more. Cupcakes make people happy.',
        projectName : projectName,
        copyright : copyright
    });
};

exports.product_single = (req, res) => {

    let requiredId = req.params.id;
    let searchResults = [];

    for(let i= 0 ; i< products.length; i++){
        let productId = products[i].number;
        if(productId === requiredId){
            searchResults.push(products[i]);
        }
    };

    res.render('product_single', {
        title: 'Product Detail Title',
        projectName : projectName,
        copyright : copyright,
        searchResults :searchResults
    });
};

exports.notFound = (req, res) => {
    res.render('notFound', {
        title: 'Not Found Title',
        projectName : projectName,
        copyright : copyright
    });
};
