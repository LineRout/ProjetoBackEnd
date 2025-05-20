require('dotenv').config();
const { connect, disconnect } = require('../config/db');
const Product = require('../models/Product');

const produtos = [
  {
    title: "Smartphone Samsung Galaxy A14",
    description: "Tela de 6.6\", 128GB, Dual Chip, Câmera Tripla, Android 13",
    price: 1099.90,
    category: "Eletrônicos",
    stock: 15
  },
  {
    title: "Notebook Acer Aspire 5",
    description: "Intel Core i5, 8GB RAM, SSD 256GB, Windows 11",
    price: 2999.00,
    category: "Informática",
    stock: 10
  },
  {
    title: "Tênis Nike Revolution 6",
    description: "Conforto e estilo para corrida e academia",
    price: 239.99,
    category: "Calçados",
    stock: 25
  },
  {
    title: "Cafeteira Elétrica Mondial",
    description: "15 xícaras, com filtro permanente e jarra de vidro",
    price: 129.90,
    category: "Eletrodomésticos",
    stock: 30
  },
  {
    title: "Camisa Polo Masculina",
    description: "Camisa casual de algodão, várias cores disponíveis",
    price: 79.90,
    category: "Vestuário",
    stock: 50
  },
  {
    title: "Livro: O Poder do Hábito",
    description: "Best-seller de Charles Duhigg sobre mudança de comportamento",
    price: 42.90,
    category: "Livros",
    stock: 40
  },
  {
    title: "Fone de Ouvido Bluetooth JBL Tune 510BT",
    description: "Conexão sem fio, bateria de até 40h, som JBL Pure Bass",
    price: 229.00,
    category: "Áudio",
    stock: 20
  },
  {
    title: "Mouse Gamer Redragon M908",
    description: "Botões programáveis, 12400 DPI, iluminação RGB",
    price: 159.99,
    category: "Acessórios",
    stock: 35
  }
];

(async () => {
  try {
    await connect(process.env.MONGO_URI);
    const repo = new Product();

    for (const p of produtos) {
      await repo.insert(p);
    }

    console.log('Produtos inseridos com sucesso!');
    await disconnect();
  } catch (error) {
    console.error('Erro ao inserir produtos:', error);
  }
})();
