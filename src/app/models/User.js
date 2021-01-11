const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        phone: Sequelize.BIGINT,
        endereco: Sequelize.STRING,
        complemento: Sequelize.STRING,
        numberHouse: Sequelize.SMALLINT,
        cep: Sequelize.INTEGER
      },
      {
        sequelize
      }
    );
    return this;
  }
}

module.exports = User;
