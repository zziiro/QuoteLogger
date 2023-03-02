
const express = require('express');
const mongoose = require('mongoose');
const quoteRoutes = require('./routes/quoteRoutes');
const app = express(); 
const port = 8080;

// view engine
app.set('view engine', 'ejs'); // already sets routes for view file

/* CONNECT TO MONGO */
const connectionString = 'mongodb+srv://cb:nicepw@quote.vwrlzuq.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('strictQuery', false);
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {app.listen(port);})
.catch((err) => { console.log('[ERROR]', err);});



/* STATIC FILES */ 
app.use(express.static('public'));
app.use(express.urlencoded( {extended: true })); // takes in the form data


/* BASIC ROUTING */
app.get('/', (req, res) => { // index page
    res.render('index');
});

app.use('/', quoteRoutes); // everything else

app.use((req, res) => { // page not found error
    res.status(404).render('404');
})