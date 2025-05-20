const mongoose = require('mongoose');
const logger = require('../logger');

module.exports = {
  async connect(uri) {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected successfully.');
    } catch (error) {
      logger.error('MongoDB connection error: ' + error);
      throw error;
    }
  },

  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log('MongoDB disconnected.');
    } catch (error) {
      logger.error('MongoDB disconnection error: ' + error);
      throw error;
    }
  }
};
