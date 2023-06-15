const { DataTypes } = require('sequelize');
const database = require('../config/database');

const Message = database.define('message', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  _id: { // user_id
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  chat_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  forwarded: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  user: {
    type: DataTypes.JSONB,
    allowNull: false,
    // defaultValue: {
    //   _id: null,
    //   name: null,
    //   avatar: null
    // }
  },
  text: { // message
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Message;