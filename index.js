// index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// === IMPORTAÇÃO DAS ROTAS ===
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

// === USO DAS ROTAS ===
app.use('/api/auth', authRoutes);
app.use('/api/produtos', productRoutes);

// ROTA BASE PARA TESTE
app.get('/', (req, res) => {
  res.json({ mensagem: 'API do E-commerce funcionando!' });
});

// === CONEXÃO COM O MONGODB ===
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB conectado');
  app.listen(PORT, () => {
    console.log(` Servidor rodando na porta ${PORT}`);
  });
}).catch(err => {
  console.error(' Erro ao conectar ao MongoDB:', err);
});
