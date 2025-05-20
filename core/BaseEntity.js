const logger = require('../logger');

class BaseEntity {
  constructor(model) {
    this.model = model;
  }

  async insert(data) {
    try {
      const doc = new this.model(data);
      const savedDoc = await doc.save();
      console.log(`[${this.model.modelName}] Inserted: ${savedDoc._id}`);
      return savedDoc;
    } catch (error) {
      logger.error(`[${this.model.modelName}] Insert error: ${error}`);
      throw error;
    }
  }

  async find(filter = {}) {
    try {
      const results = await this.model.find(filter).exec();
      console.log(`[${this.model.modelName}] Found ${results.length} result(s)`);
      return results;
    } catch (error) {
      logger.error(`[${this.model.modelName}] Find error: ${error}`);
      throw error;
    }
  }

  async delete(id) {
    try {
      const result = await this.model.findByIdAndDelete(id).exec();
      if (result) {
        console.log(`[${this.model.modelName}] Deleted: ${id}`);
      } else {
        console.log(`[${this.model.modelName}] Not found: ${id}`);
      }
      return result;
    } catch (error) {
      logger.error(`[${this.model.modelName}] Delete error: ${error}`);
      throw error;
    }
  }
}

module.exports = BaseEntity;
