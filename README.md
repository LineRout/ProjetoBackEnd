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
- [dotenv](https://github.com/motdotla/dotenv)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)

---

## 📁 Estrutura do Projeto
```
ecommerce-backend/
│
├── .env # Variáveis de ambiente (PORT, MONGO_URI, JWT_SECRET)
├── index.js # Ponto de entrada da aplicação
├── package.json # Dependências do projeto
│
├── controllers/ # Lógica de autenticação e produtos
│ ├── authController.js
│ └── productController.js
│
├── middlewares/
│ └── authMiddleware.js # Verifica JWT em rotas protegidas
│
├── models/
│ ├── User.js # Modelo de usuário com senha criptografada
│ └── Product.js # Modelo de produto
│
├── routes/
│ ├── authRoutes.js # Rotas de login e registro
│ └── productRoutes.js # Rotas CRUD de produtos
│
├── scripts/ # Scripts auxiliares para teste
│ ├── testeLogin.js
│ ├── cadastrarProduto.js
│ ├── listarProdutos.js
│ ├── deletarProduto.js
│ └── registrarUsuario.js
```
---

## :gear: Pré-requisitos

- [Node.js](https://nodejs.org/en/) instalado.
- [MongoDB](https://www.mongodb.com/) rodando localmente ou via Atlas.

---

## :wrench: Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto com:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=sua-chave-secreta
```
---
## 📦 Instalação

# Clone o projeto
```
git clone https://github.com/seu-usuario/ecommerce-backend.git
cd ecommerce-backend
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
# ▶ Testes via terminal (cURL)

Login
```
curl -X POST http://localhost:3000/api/auth/login ^
 -H "Content-Type: application/json" ^
 -d "{"email":"matheus(ou raul ou admin)@email.com", "senha":"123456"}"
```
Criar produto
```
curl -X POST http://localhost:3000/api/produtos ^
 -H "Authorization: Bearer SEU_TOKEN" ^
 -H "Content-Type: application/json" ^
 -d "{"title":"TV", "price":2999.90, "stock":3}"
```
---


## 🛠 Funcionalidades
✅ Login e registro de usuários com senhas criptografadas

✅ Emissão de token JWT para autenticação

✅ Rotas protegidas com middleware

✅ CRUD de produtos

✅ Scripts auxiliares para teste com Node.js

---
## 📝 Licença
Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](https://opensource.org/licenses/MIT) para mais detalhes.

---
## ✉️ Contato
Desenvolvido por Raul Pan Bertoline e Matheus Felipe Delmont Mitraud

📧 Email: [raul_pan2001@hotmail.com.com](raul_pan2001@hotmail.com.com), [matheus_delmont@hotmail.com](matheus_delmont@hotmail.com) 

🔗 GitHub: [https://github.com/LineRout](https://github.com/LineRout), [https://github.com/Mitraud](https://github.com/Mitraud)
