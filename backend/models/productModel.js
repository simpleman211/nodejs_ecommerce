const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: String,
    brandName: String,
    category: String,
    image: [],
    description: String,
    price: Number,
    selling: Number
}, {
    timestamps: true
});


const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
