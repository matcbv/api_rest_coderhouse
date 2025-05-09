const mongoose = require('mongoose');

const CartModel = mongoose.model({
	id: { type: String, required: true },
	products: {
		type: [
			{
				productId: { type: Number, required: true },
				quantity: { tpye: Number, required: true },
			},
		],
		required: true,
	},
});

module.exports = CartModel;
