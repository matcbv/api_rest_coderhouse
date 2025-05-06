const express = require('express');
const { getProducts, addProduct } = require('../controllers/ProductController');

const productRouter = express.Router();

productRouter.get('/', (req, res) => {
	res.render('index.html');
});

productRouter.route('/products').get(getProducts).post(addProduct);

productRouter.get('/products/:productId', getProducts);

module.exports = productRouter;
