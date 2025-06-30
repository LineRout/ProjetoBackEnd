// scripts/registrarVarios.js

require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User'); // Garante que o model User esteja correto

async function registrarVariosUsuarios() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const usuarios = [
      { nome: "Matheus", email: "matheus@email.com", senha: "123456" },
      { nome: "Raul", email: "raul@email.com", senha: "123456" },
      { nome: "Admin", email: "admin@email.com", senha: "admin123" }
    ];

    for (const dados of usuarios) {
      const existe = await User.findOne({ email: dados.email });
      if (existe) {
        console.log(`⚠️ Usuário ${dados.email} já existe.`);
      } else {
        const novo = new User(dados);
        await novo.save();
        console.log(`✅ Usuário ${dados.nome} registrado com sucesso!`);
      }
    }

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("❌ Erro ao registrar usuários:", err);
    process.exit(1);
  }
}

registrarVariosUsuarios();
