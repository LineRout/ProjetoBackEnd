# 🛒 E-commerce Backend Library (Node.js + MongoDB)

Uma biblioteca modular de acesso a banco de dados MongoDB para sistemas de e-commerce, utilizando `Mongoose`. Implementa entidades como Produto, Categoria, Usuário e Pedido com métodos genéricos de inserção, busca e deleção, além de tratamento e log de erros via `winston`.

![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-%23A6E22E?logo=mongodb&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Winston](https://github.com/winstonjs/winston)
- [dotenv](https://github.com/motdotla/dotenv)

---

## 📁 Estrutura do Projeto
```
ecommerce-backend/
│
├── .env                  # Variáveis de ambiente (.env com MONGO_URI)
├── package.json          # Dependências do projeto (Mongoose, dotenv, winston, etc.)
├── logger.js             # Configuração do logger com Winston
├── index.js              # Exemplo básico de uso da biblioteca (insert, find, delete)
├── menu.js               # Menu interativo no terminal com CRUD completo (Create, Read, Update, Delete)
│
├── config/
│   └── db.js             # Módulo de conexão e desconexão com o banco MongoDB
│
├── core/
│   └── BaseEntity.js     # Classe genérica base com métodos insert, find, delete e update
│
├── models/
│   ├── Product.js        # Entidade Produto, herda de BaseEntity
│   ├── Category.js       # Entidade Categoria
│   ├── User.js           # Entidade Usuário
│   └── Order.js          # Entidade Pedido (com ref para User e Product)
│
├── logs/
│   └── error.log         # Log de erros gerado automaticamente via Winston
```
---

## :gear: Pré-requisitos

- [Node.js](https://nodejs.org/en/) instalado.
- [MongoDB](https://www.mongodb.com/) rodando localmente ou via Atlas.

---

## :wrench: Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto com:

```env
MONGO_URI=mongodb://localhost:27017/ecommerce
```
---
## 📦 Instalação

# Clone o projeto
```
git clone https://github.com/LineRout/ProjetoBackEnd.git
cd ProjetoBackEnd
```
---
# Instale as dependências
```
npm install
```
---

# ▶ Execução
Rodar o exemplo básico:
```
npm start
```
# ▶ Menu interativo no terminal (menu.js)
```
node menu.js
```
---
## 📚 Exemplo de Uso (index.js)
```
const Product = require('./models/Product');
const { connect, disconnect } = require('./config/db');

(async () => {
  await connect(process.env.MONGO_URI);
  
  const produto = new Product();

  const novo = await produto.insert({
    title: 'Camisa Polo Masculina',
    description: 'Camisa casual de algodão, confortável para o dia a dia',
    price: 79.90,
    category: 'Vestuário',
    stock: 50
  });

  const encontrados = await produto.find({ category: 'Vestuário' });
  console.log('Encontrados:', encontrados);

  await produto.delete(novo._id);

  await disconnect();
})();
```
---
## 📋 Opções disponíveis no menu:
```
1 - Inserir produto
2 - Listar produtos
3 - Deletar produto
4 - Atualizar produto
5 - Inserir exemplos automáticos
6 - Sair
```
---


## 🛠 Funcionalidades
✅ Conexão com MongoDB utilizando URI

✅ Classes com métodos genéricos: insert, find, delete e update

✅ Modelos para Produto, Categoria, Usuário e Pedido

✅ Log de erros em arquivo com Winston (logs/error.log)

✅ Suporte a relacionamento entre entidades (Order usa ref para User e Product)

---
## 📝 Licença
Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](https://opensource.org/licenses/MIT) para mais detalhes.

---
## ✉️ Contato
Desenvolvido por Raul Pan Bertoline e Matheus Felipe Delmont Mitraud

📧 Email: [raul_pan2001@hotmail.com.com](raul_pan2001@hotmail.com.com), [matheus_delmont@hotmail.com](matheus_delmont@hotmail.com) 

🔗 GitHub: [https://github.com/LineRout](https://github.com/LineRout), [https://github.com/Mitraud](https://github.com/Mitraud)
