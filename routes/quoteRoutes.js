
const express = require('express');
const quoteController = require('../controller/quoteController');

// make new router
const router = express.Router();

/* BLOG ROUTES */
router.get('/new-quote', quoteController.addNewQuote_route_get)
router.post('/saved-quotes', quoteController.addNewQuote_route_post);
router.get('/saved-quotes', quoteController.seeAllQuotes_route);
router.get('/:id', quoteController.singleQuote_route);
router.delete('/:id', quoteController.deleteQuote_route);


// export the router
module.exports = router;