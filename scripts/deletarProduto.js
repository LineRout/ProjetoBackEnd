require('dotenv').config();
const axios = require('axios');

async function deletarProduto() {
  try {
    const login = await axios.post('http://localhost:3000/api/auth/login', {
      email: 'matheus@email.com',
      senha: '123456'
    });

    const token = login.data.token;

    const produtoId = 'COLE_O_ID_DO_PRODUTO_AQUI';

    const resposta = await axios.delete(`http://localhost:3000/api/produtos/${produtoId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log('🗑️ Produto deletado com sucesso:');
    console.log(resposta.data);
  } catch (err) {
    console.error('❌ Erro ao deletar produto:', err.response?.data || err.message);
  }
}

deletarProduto();
