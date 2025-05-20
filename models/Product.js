const mongoose = require('mongoose');
const BaseEntity = require('../core/BaseEntity');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: String,
  stock: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

class Product extends BaseEntity {
  constructor() {
    super(mongoose.model('Product', productSchema));
  }
}

module.exports = Product;
