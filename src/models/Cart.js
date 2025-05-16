const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
	id: { type: String, required: true },
	products: {
		type: [
			{
				productId: { type: Number, required: true },
				quantity: { type: Number, required: true },
			},
		],
		required: true,
	},
});

const CartModel = mongoose.model('Cart', CartSchema);

module.exports = CartModel;
