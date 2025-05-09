const CartModel = require('../models/Cart');
const ProductModel = require('../models/Product');

const CartController = {
	getCart: async (req, res, next) => {
		try {
			const cart = await CartModel.findById(req.body.id);
			res.json(cart.products);
		} catch (e) {
			next(e);
		}
	},

	postCart: async (req, res, next) => {
		try {
			await CartModel.create(req.body);
			res.status(200).send('Carrinho adicionado com sucesso!');
		} catch (e) {
			next(e);
		}
	},

	addProductToCart: async (req, res, next) => {
		try {
			const product = await ProductModel.findById(req.params.pid);
			const cart = await CartModel.findById(req.params.cid);
			const currentProduct = cart.products.find(
				(p) => p.pid === req.params.pid,
			);

			if (currentProduct) {
				await CartModel.findByIdAndUpdate(req.params.cid, {
					products: [
						...cart.products,
						{ ...currentProduct, quantity: currentProduct.quantity + 1 },
					],
				});
			} else {
				await CartModel.findByIdAndUpdate(req.params.cid, {
					products: [...cart.products, { id: product.id, quantity: 1 }],
				});
			}
			res.status(200).send('Produto adicionado ao carrinho com sucesso!');
		} catch (e) {
			next(e);
		}
	},
};

module.exports = CartController;
