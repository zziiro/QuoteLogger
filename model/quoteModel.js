
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create the quote schema
const quoteSchema = new Schema({
    quoteOrigin: {
        type: String,
        required: true
    },
    emotion: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true,
    }
    
}, {timestamps: true});

// make model based on the schema using mongoose
const Quote = mongoose.model('Quote', quoteSchema);

// export the model
module.exports = Quote;