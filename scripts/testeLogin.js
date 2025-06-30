require('dotenv').config();
const axios = require('axios');

async function loginUsuario() {
  try {
    const resposta = await axios.post('http://localhost:3000/api/auth/login', {
      email: 'matheus@email.com',
      senha: '123456'
    });

    console.log('✅ Login realizado com sucesso:');
    console.log('Token JWT:', resposta.data.token);
    console.log('Usuário:', resposta.data.usuario);
  } catch (err) {
    console.error('❌ Erro no login:', err.response?.data || err.message);
  }
}

loginUsuario();
