const logger = require('../logger');

class BaseEntity {
  constructor(model) {
    this.model = model;
  }

  // CREATE
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

  // READ
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

  // DELETE
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

  // UPDATE
  async update(id, newData) {
    try {
      const updated = await this.model.findByIdAndUpdate(id, newData, { new: true }).exec();
      if (updated) {
        console.log(`[${this.model.modelName}] Updated: ${updated._id}`);
      } else {
        console.log(`[${this.model.modelName}] No document found to update.`);
      }
      return updated;
    } catch (error) {
      logger.error(`[${this.model.modelName}] Update error: ${error}`);
      throw error;
    }
  }
}

module.exports = BaseEntity;
