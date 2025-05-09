const express = require('express');
const {
	getCart,
	postCart,
	addProductToCart,
} = require('../controllers/CartController');

const cartRouter = express.Router();

cartRouter.route('/carts').get(getCart).post(postCart);

cartRouter.post('/carts/:cid/products/:pid').post(addProductToCart);

module.exports = cartRouter;
