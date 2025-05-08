const express = require('express');
const { getProducts, postProduct } = require('../controllers/ProductController');

const productRouter = express.Router();

productRouter.get('/', (req, res) => {
	res.render('index.html');
});

productRouter.route('/products').get(getProducts).post(postProduct);

productRouter.get('/products/:productId', getProducts);

module.exports = productRouter;
