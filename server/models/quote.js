var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Validator = require('mongoose-unique-validator');

const QuoteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Content is required.'],
        minlength: 4,
        unique: true
    },
    author: { 
        type: String,
        required: [true, 'Author is required.'],
        minlength: 1,
        unique: true
    },
    rating: {
        type: Number,
        default: 0,
    },
}, { timestamps: true })
QuoteSchema.plugin(Validator, { message: '{PATH} must be unique.' });
const Quote = mongoose.model('Quote', QuoteSchema);