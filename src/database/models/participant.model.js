const { DataTypes } = require('sequelize');
const database = require('../config/database');

const Participant = database.define('participant', {
  id: {
    autoIncrement: true,
    autoIncrementIdentity: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  chat_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  writing: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
});

module.exports = Participant;