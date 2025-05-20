const mongoose = require('mongoose');
const BaseEntity = require('../core/BaseEntity');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String
});

class Category extends BaseEntity {
  constructor() {
    super(mongoose.model('Category', categorySchema));
  }
}

module.exports = Category;
