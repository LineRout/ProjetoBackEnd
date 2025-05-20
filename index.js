require('dotenv').config();
const { connect, disconnect } = require('./config/db');
const Product = require('./models/Product');

(async () => {
  try {
    await connect(process.env.MONGO_URI);

    const produto = new Product();

    const novo = await produto.insert({
      title: 'Produto teste',
      description: 'Descrição de teste',
      price: 25.99,
      category: 'Testes',
      stock: 10
    });

    const encontrados = await produto.find({ category: 'Testes' });
    console.log('Encontrados:', encontrados);

    await produto.delete(novo._id);

    await disconnect();
  } catch (err) {
    console.error('Erro:', err);
  }
})();
