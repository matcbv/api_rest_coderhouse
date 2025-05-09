const express = require('express');
const {
	getProducts,
	postProduct,
	getProduct,
	putProduct,
	delProduct,
} = require('../controllers/ProductController');

const productRouter = express.Router();

productRouter.get('/', (req, res) => {
	res.render('index.html');
});

productRouter.route('/products').get(getProducts).post(postProduct);

productRouter
	.route('/products/:id')
	.get(getProduct)
	.put(putProduct)
	.delete(delProduct);

module.exports = productRouter;
