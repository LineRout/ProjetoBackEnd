require('dotenv').config();
const readline = require('readline');
const { connect, disconnect } = require('./config/db');
const Product = require('./models/Product');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = question => new Promise(resolve => rl.question(question, resolve));

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

async function menu() {
  await connect(process.env.MONGO_URI);

  let opcao = '';
  while (opcao !== '4') {
    console.log('=== MENU E-COMMERCE ===');
    console.log('1 - Inserir produto');
    console.log('2 - Listar produtos');
    console.log('3 - Deletar produto');
    console.log('4 - Sair');
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
