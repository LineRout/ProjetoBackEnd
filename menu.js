require('dotenv').config();
const readline = require('readline');
const { connect, disconnect } = require('./config/db');
const Product = require('./models/Product');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = question => new Promise(resolve => rl.question(question, resolve));

// CREATE
async function inserirProduto() {
  const title = await ask('Nome do produto: ');
  const description = await ask('Descrição: ');
  const price = parseFloat(await ask('Preço: R$ '));
  const category = await ask('Categoria: ');
  const stock = parseInt(await ask('Estoque: '));

  const produto = new Product();
  await produto.insert({ title, description, price, category, stock });

  console.log('✅ Produto inserido com sucesso!\n');
}

// READ
async function listarProdutos() {
  const produto = new Product();
  const lista = await produto.find();

  if (lista.length === 0) {
    console.log('📭 Nenhum produto encontrado.\n');
    return;
  }

  console.log('\n🛒 Produtos cadastrados:');
  lista.forEach(p => {
    console.log(`- ID: ${p._id} | ${p.title} | R$ ${p.price.toFixed(2)} | Estoque: ${p.stock}`);
  });
  console.log();
}

// DELETE
async function deletarProduto() {
  const id = await ask('Digite o ID do produto que deseja deletar: ');

  const produto = new Product();
  const resultado = await produto.delete(id);

  if (resultado) {
    console.log('🗑️ Produto deletado com sucesso.\n');
  } else {
    console.log('⚠️ Produto não encontrado.\n');
  }
}

// UPDATE
async function atualizarProduto() {
  const id = await ask('Digite o ID do produto que deseja atualizar: ');
  const title = await ask('Novo nome do produto (ou Enter para manter): ');
  const description = await ask('Nova descrição (ou Enter para manter): ');
  const priceStr = await ask('Novo preço (ou Enter para manter): ');
  const category = await ask('Nova categoria (ou Enter para manter): ');
  const stockStr = await ask('Novo estoque (ou Enter para manter): ');

  const produto = new Product();
  const antigo = await produto.find({ _id: id });

  if (antigo.length === 0) {
    console.log('⚠️ Produto não encontrado.\n');
    return;
  }

  const novo = {
    title: title || antigo[0].title,
    description: description || antigo[0].description,
    price: priceStr ? parseFloat(priceStr) : antigo[0].price,
    category: category || antigo[0].category,
    stock: stockStr ? parseInt(stockStr) : antigo[0].stock
  };

  await produto.update(id, novo);
  console.log('✅ Produto atualizado.\n');
}

// EXEMPLOS
async function inserirExemplosAutomaticamente() {
  const produto = new Product();
  const exemplos = [
    { title: 'Fone JBL', description: 'Bluetooth', price: 229, category: 'Áudio', stock: 10 },
    { title: 'Tênis Nike', description: 'Corrida', price: 239.99, category: 'Calçados', stock: 5 },
    { title: 'Livro: O Poder do Hábito', description: 'Charles Duhigg', price: 42.90, category: 'Livros', stock: 20 }
  ];

  for (let p of exemplos) {
    await produto.insert(p);
  }

  console.log('📦 Produtos de exemplo inseridos com sucesso!\n');
}

// MENU
async function menu() {
  await connect(process.env.MONGO_URI);

  let opcao = '';
  while (opcao !== '6') {
    console.log('=== MENU E-COMMERCE ===');
    console.log('1 - Inserir produto');
    console.log('2 - Listar produtos');
    console.log('3 - Deletar produto');
    console.log('4 - Atualizar produto');
    console.log('5 - Inserir exemplos automáticos');
    console.log('6 - Sair');
    opcao = await ask('Escolha uma opção: ');

    switch (opcao) {
      case '1':
        await inserirProduto();
        break;
      case '2':
        await listarProdutos();
        break;
      case '3':
        await deletarProduto();
        break;
      case '4':
        await atualizarProduto();
        break;
      case '5':
        await inserirExemplosAutomaticamente();
        break;
      case '6':
        console.log('\nEncerrando...');
        break;
      default:
        console.log('❌ Opção inválida.\n');
    }
  }

  rl.close();
  await disconnect();
}

menu();
