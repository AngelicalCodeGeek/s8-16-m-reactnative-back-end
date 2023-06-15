const { DataTypes } = require('sequelize');
const bcrypt = require("bcrypt");
const database = require('../config/database');

const User = database.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameLastname: {
      type: DataTypes.STRING,

    },
    user: {
      type: DataTypes.STRING(20),
      // allowNull: false,
    },
    email: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    city: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_confirmed: {
      type: DataTypes.BOOLEAN,
      // field: "is_confirmed",
      defaultValue: false,
    },
    type: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    image_url: {
      type: DataTypes.STRING,
      defaultValue: 'http://imgfz.com/i/yjKHrWn.png'
    },
    online: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    hooks: {
      beforeCreate: (user, options) => {
        const { password } = user;
        const hash = bcrypt.hashSync(password, 10);
        user.password = hash;
      }
    },
    scopes: {
      admin: {
        attributes: [
          'id',
          'nameLastname',
          'user',
          'city',
          'image_url',
          'email',
          'type'
        ]
      },
      view_public: {
        attributes: [
          "id",
          "user",
          "city",
          "image_url",
        ],
      },
    }
  },
);

module.exports = User