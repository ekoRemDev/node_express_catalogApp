/* Todo 1 -
++ npm install express
++ Include express library
 */
const express = require('express');

// Todo 2 - create an express instance
const app = express();

// Todo 34 - We'll use express session
// var cookieParser = require('cookie-parser');
const session = require('express-session');
// app.use(cookieParser());
app.use(session({secret: "Secret Catalog App!"}));


// Todo 5 - We'll use static content
var path = require('path');
app.use(express.static(path.join(__dirname,'public')));

// Todo 26 - npm i mongo mongoose and create instances
const mongo = require('mongodb');
const mongoose = require('mongoose');

// Todo 27 - Create a connection to mongoDb
mongoose.connect('mongodb://localhost/node_express_catalogApp');
const db = mongoose.connection;
// Todo 28 - Create a model folder and create a product model


// Todo 4 - Routes
// Default Route
// app.get('/', (req , res)=> {
//     res.send('Server Runs on Port 3000');
// });
// Todo 12 - We re-create routes
const routes = require('./routes');
app.get('/',routes.home);
app.get('/about',routes.about);
app.get('/product_single/:id?',routes.product_single);
app.get('/contact',routes.contact);
app.get('/login',routes.login);
app.get('/favorite/:id?',routes.favorite);
app.get('/favorites', routes.favorites);
app.get('/products', routes.products);
app.get('/categories', routes.categories);
app.get('/*',routes.notFound);




// Todo 9 - Add EJS Template Engine
app.set('view engine','ejs');
// Todo 10 - Create home.ejs inside views folder


// Todo 3 - We create server and Run
app.listen(3000, (req, res)=>{
    console.log('Server up and Runs on Port 3000');
});




// Todo 6 - Create routes folder
// Todo 7 - Create index.script inside route folder
// Todo 8 - Create views folder
// Todo 13 - Create about.ejs | product_single.ejs | notFound.ejs and related routes on index.ejs file and app.script file
// Todo 14 - cerate partials folder under the views and add partials to pages
// Todo 15 - Create public Folder
// Todo 16 - Create images | script | style folder
// Todo 17 - Create styles.css inside public/style folder
// Todo 18 - Create product.json file
// Todo 19 - Add Product Images
// Todo 21 - Implement product images on main page
// Todo 22 - contact and login templates and routes created
// Todo 23 - favourites | like | decision list routes are created
// Todo 30 - we use node_express_catalogApp db in mongo
/* Todo 31 - we'll create products to get data from mongo
    - create link on the header
    - create view
    - create route
 */

// Todo 32 - we'll create categories model, route,view and collections in db



