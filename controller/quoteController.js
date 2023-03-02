
const Quote = require('../model/quoteModel');

/* ROUTING METHODS */
const addNewQuote_route_get = (req, res) => {
    res.render('addNewQuote');
}

const addNewQuote_route_post = (req, res) => {
    const quote = new Quote(req.body);

    quote.save()
    .then((result) => {res.redirect('/saved-quotes');})
    .catch((err) => {
        res.redirect('/404-quote')
        console.log('[ERROR]', err);
    });
    
}

const seeAllQuotes_route = (req ,res) => {
    Quote.find().sort({createdAt: -1})
    .then((result) => {
        res.render('seeAllQuotes', {
            quotes: result
        })
    })
    .catch((err) => {
        console.log('[ERROR]', err);
    })
}

const singleQuote_route = (req, res) => {
    const id = req.params.id;

    Quote.findById(id)
    .then((result) => {
        res.render('singleQuote', {
        quote: result
    })})
    .catch((err) => {
        res.render('404-quote');
        console.log('[ERROR]', err);
    })
}

const deleteQuote_route = (req ,res) => {
    const id = req.params.id;

    Quote.findByIdAndDelete(id)
    .then((result) => {res.json({redirect: '/saved-quotes'})})
    .catch((err) => {console.log('[ERROR]', err);})
}


// export modules
module.exports = {
    addNewQuote_route_get,
    addNewQuote_route_post,
    seeAllQuotes_route,
    singleQuote_route,
    deleteQuote_route
}