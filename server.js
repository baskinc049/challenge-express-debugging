const express = require('express');
const exphbs = require('express-handlebars');

// INIT APP
const app = express();
const PORT = process.env.PORT || 8080;

// ROUTERS
/*************
* ISSUE - Incorrect file paths to route handlers.
*
* const home = require('./router/home');
* const about = require('./router/about');
* const contact = require('./router/contact');
*************/
const home = require('./routes/home');
const about = require('./routes/about');
const contact = require('./routes/contact')

// VIEW ENGINE SETUP
app.use(express.static('public'));
app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');

/*
app.get('/', (req, res) => {
  res.send('smoke test');
});
*/

/*************
* ISSUE - Middleware functions not mounted correctly.
* Example: app.use(path, callback)
*
* app.use(home);
* app.use(about);
* app.use(contact);
*************/
app.use('/', home);
app.use('/about', about);
app.use('/contact', contact);


app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
