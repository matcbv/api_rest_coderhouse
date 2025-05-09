const ProductModel = require('../models/Product');

const ProductController = {
	getProducts: async (req, res, next) => {
		try {
			const productsData = await ProductModel.find({});
			res.json(productsData);
		} catch (e) {
			next(e);
		}
	},

	getProduct: async (req, res, next) => {
		try {
			const productData = await ProductModel.findById(req.params.id);
			res.json(productData);
		} catch (e) {
			next(e);
		}
	},

	putProduct: async (req, res, next) => {
		try {
			const currentData = (
				await ProductModel.findById(req.params.id)
			).toObject();
			const newData = Object.keys(currentData).filter(
				(k) => currentData[k] !== req.body[k],
			);
			const updatedData = await ProductModel.findByIdAndUpdate(
				req.params.id,
				newData,
				{ new: true },
			);
			res.json(updatedData);
		} catch (e) {
			next(e);
		}
	},

	postProduct: async (req, res, next) => {
		try {
			await ProductModel.create(req.body);
			res.status(200).send('Produto adicionado com sucesso!');
		} catch (e) {
			next(e);
		}
	},

	delProduct: async (req, res, next) => {
		try {
			await ProductModel.findByIdAndDelete(req.body.id);
			res.status(200).send('Documento excluído com sucesso!');
		} catch (e) {
			next(e);
		}
	},
};

module.exports = ProductController;
