const mongoose = require('mongoose');
const BaseEntity = require('../core/BaseEntity');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true }
  }],
  totalAmount: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' }
});

class Order extends BaseEntity {
  constructor() {
    super(mongoose.model('Order', orderSchema));
  }
}

module.exports = Order;
