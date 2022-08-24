const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `db/${process.env.NODE_ENV || 'local'}.sqlite`,
});

module.exports = sequelize;
