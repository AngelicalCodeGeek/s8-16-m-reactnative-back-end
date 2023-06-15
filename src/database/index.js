const initModels = require("./models/init.models");
const db = require("./config/database");


const initDatabase = () => {
  initModels();

  db.authenticate()
    .then(() => console.log("Base de datos autenticada"))
    .catch((error) => console.log(error));

  db.sync({ force: false })
    .then(() => console.log("Base de datos sincronizada"))
    .catch((error) => console.log(error));
};


module.exports = {
  initDatabase
}