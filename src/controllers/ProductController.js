const ProductModel = require('../models/Product');

const ProductController = {
	getProducts: async (req, res, next) => {
		try {
			let productsData = null;
			if (req.params.id) {
				productsData = await ProductModel.find({ id: req.params.productId });
			} else {
				productsData = await ProductModel.find();
			}
			res.send(productsData);
		} catch (e) {
			next(e);
		}
	},

	addProduct: async (req, res, next) => {
		try {
			await ProductModel.create(req.body);
		} catch (e) {
			next(e);
		}
	},
};

module.exports = ProductController;
