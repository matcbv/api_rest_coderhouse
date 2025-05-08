const mongoose = require('mongoose');

const CartModel = mongoose.model({
    id: {type: String, required: true},
    products: {type: [String], required: true},
});

module.exports = CartModel;
