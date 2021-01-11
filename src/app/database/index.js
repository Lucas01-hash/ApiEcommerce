const Sequelize = require("sequelize");

// Importar todos os models utilizados
const User = require("../models/User");
const Produto = require("../models/Produto");

// importar a config do banco de dados
const databaseConfig = require("../../config/database");

// inserir no array todos os models importados
const models = [Produto];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection))
    .map(
      (model) => model.associate && model.associate(this.connection.models)
    );
  }
}

module.exports = new Database();
