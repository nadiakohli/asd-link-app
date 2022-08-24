const { Model, DataTypes } = require('sequelize');

const sequelize = require.main.require('./config/sequelize');

class Link extends Model {}

Link.init({
  full: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  short: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Link',
});

module.exports = Link;
