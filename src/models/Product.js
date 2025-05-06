const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	id: { type: Number, required: true },
	title: { type: String, required: true, trim: true },
	description: { type: String, required: true, trim: true },
	code: { type: String, required: true },
	price: { type: Number, required: true },
	status: { type: Boolean, required: true },
	stock: { type: Number, required: true },
	category: { type: String, required: true },
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;
