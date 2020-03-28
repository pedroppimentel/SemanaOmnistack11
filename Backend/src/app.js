const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes'); // './' para indicar que é um arquivo, senao será tratado como pacote

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.use(errors());

//npm -> instalar pacote
//npx -> executar um pacote

// ex: rota => localhost:3333/users 
//     recurso => /users (geralmente associado com alguma entidade)

// comando terminal: node index.js -> executar o server node

/**
 * Métodos HTTP
 * 
 * GET: buscar uma info do back-end
 * POST: criar uma info no back-end
 * PUT: alterar uma info no back-end
 * DELETE: deletar uma info no back-end
 */

 /**
  * Tipos de parâmetros
  * 
  * Query: parâmetros nomeados enviados na rota após ? (filtros, paginação)
  * Rote Params: parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL (Nao-relacionais): MongoDB, CouchDB, etc 
   * 
   * Escolha = SQLite -> armazenado como arquivo .sqlite, possibilitando utilizar outros bancos SQL sem alterações
   */

   /**
    * Driver: SELECT * FROM user
    * Query Builder: table('users).select('*').where() -> escolha = KNEX
    */

//app.listen(3333); // browser -> localhost:3333

module.exports = app;
