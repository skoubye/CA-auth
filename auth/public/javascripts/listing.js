const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const listingSchema = new Schema({
    Name: String,
    Phone: String,
    Item: String,
    Price: String
});

const listing = mongoose.model('listing', listingSchema);

module.exports = listing;