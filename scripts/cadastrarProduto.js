// scripts/cadastrarProduto.js

require('dotenv').config();
const axios = require('axios');

async function cadastrarProduto() {
  try {
    // Primeiro: faça login para obter o token
    const login = await axios.post('http://localhost:3000/api/auth/login', {
      email: 'matheus@email.com',
      senha: '123456'
    });

    const token = login.data.token;

    // Agora: cadastrar produto
    const resposta = await axios.post('http://localhost:3000/api/produtos', {
      title: 'Fone Bluetooth',
      description: 'Fone com cancelamento de ruído',
      price: 299.99,
      category: 'Áudio',
      stock: 10
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log('✅ Produto cadastrado com sucesso:');
    console.log(resposta.data);
  } catch (err) {
    console.error('❌ Erro ao cadastrar produto:', err.response?.data || err.message);
  }
}

cadastrarProduto();
