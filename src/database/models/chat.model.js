const { DataTypes } = require('sequelize');
const database = require('../config/database');

const Chat = database.define('chat', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  created_by: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  type: {
    type: DataTypes.ENUM("single", "group"),
    allowNull: true,
    defaultValue: "single"
  },
  image_url: {
    type: DataTypes.STRING,
    // defaultValue: false,
  },
  min: {
    type: DataTypes.JSONB,
    defaultValue: {} // { user_id:1, date: 2023-04-18 21:39:35.613-05}
  }
});

module.exports = Chat;