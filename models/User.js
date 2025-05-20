const mongoose = require('mongoose');
const BaseEntity = require('../core/BaseEntity');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

class User extends BaseEntity {
  constructor() {
    super(mongoose.model('User', userSchema));
  }
}

module.exports = User;
