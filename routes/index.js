// Todo 11 - Create a route for home.ejs
// exports.home = (req, res)=>{
//     res.render('home');
    // res.send('aaaa');
// };

// Defauklt Project Name for Header menu
const projectName = "Catalog App";
const copyright = 'Copyright 2018 EkoRemDev@gmail.com'

// Todo 13 We are editing routes
exports.home = (req, res) => {
    res.render('home', {
        title: 'Home Page Title',
        projectName : projectName,
        copyright : copyright
    });
};

exports.about = (req, res) => {
    res.render('about', {
        title: 'About Us Page Title',
        projectName : projectName,
        copyright : copyright
    });
};

exports.product_single = (req, res) => {
    res.render('product_single', {
        title: 'Product Detail Title',
        projectName : projectName,
        copyright : copyright
    });
};

exports.notFound = (req, res) => {
    res.render('notFound', {
        title: 'Not Found Title',
        projectName : projectName,
        copyright : copyright
    });
};
