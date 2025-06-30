const Product = require('../models/Product');

// Listar todos os produtos
exports.getAll = async (req, res) => {
  try {
    const produtos = await Product.find();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar produtos.' });
  }
};

// Criar novo produto
exports.create = async (req, res) => {
  const { title, description, price, category, stock } = req.body;

  if (!title || !price || !stock) {
    return res.status(400).json({ mensagem: 'Campos obrigatórios: title, price e stock.' });
  }

  try {
    const novo = await Product.create({ title, description, price, category, stock });
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao criar produto.' });
  }
};

// Deletar produto
exports.remove = async (req, res) => {
  try {
    const produto = await Product.findByIdAndDelete(req.params.id);
    if (!produto) {
      return res.status(404).json({ mensagem: 'Produto não encontrado.' });
    }
    res.json({ mensagem: 'Produto deletado com sucesso.' });
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao deletar produto.' });
  }
};
