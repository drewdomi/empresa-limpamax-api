## 💭 Oque é esse projeto?

Este projeto é uma API RESTful desenvolvida com Node.js, Express, Prisma, Zod e TypeScript.
A API permite o cadastro de produtos, armazenando informações como nome, código de barras e 
quantidade. Este projeto visa fornecer uma solução robusta e tipada para o gerenciamento de
produtos em um sistema.

## 💡 Funcionalidades

- Cadastro de novos produtos com nome, código de barras e quantidade.
- Validação de dados de entrada utilizando Zod.
- Remoção da quantidade de produtos.
- Adição de quantidade de produtos.
- Armazenamento seguro e eficiente dos dados utilizando Prisma e um banco de dados MongoDB.

## 📌 API Endpoints

| HTTP Verbs | Endpoints | Ações |
| --- | --- | --- |
| GET | /products | Recebe todos os produtos cadastrados |
| POST | /products/create | Cria um novo produto na base de dados |
| PATCH | /products/add | Adiciona uma quantidade ao produto |
| PATCH | /products/rm | Remove uma quantidade do produto |

## 🖥️ Tecnologias Usadas

- **NodeJS**: Plataforma de execução de código JavaScript no servidor.
- **Express**: Framework para criação de aplicações web e APIs em Node.js.
- **Prisma**: ORM (Object-Relational Mapping) moderno e de tipo seguro.
- **Zod**: Biblioteca para validação de esquemas de dados.
- **TypeScript**: Superset do JavaScript que adiciona tipos estáticos ao código.
