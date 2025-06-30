const mongoose = require('mongoose');

module.exports = {
  async connect(uri) {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('✅ Conectado ao MongoDB com sucesso!');
    } catch (error) {
      console.error('❌ Erro ao conectar ao MongoDB:', error);
      throw error;
    }
  },

  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log('🔌 Desconectado do MongoDB.');
    } catch (error) {
      console.error('❌ Erro ao desconectar do MongoDB:', error);
      throw error;
    }
  }
};
