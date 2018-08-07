/* Todo 1 -
++ npm install express
++ Include express library
 */
const express = require('express');

// Todo 2 - create an express instance
const app = express();

// Todo 5 - We'll use static content
var path = require('path');
app.use(express.static(path.join(__dirname,'public')));




// Todo 4 - Routes
// Default Route
// app.get('/', (req , res)=> {
//     res.send('Server Runs on Port 3000');
// });
// Todo 12 - We re-create routes
const routes = require('./routes');
app.get('/',routes.home);
app.get('/about',routes.about);
app.get('/product_single',routes.product_single);
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

