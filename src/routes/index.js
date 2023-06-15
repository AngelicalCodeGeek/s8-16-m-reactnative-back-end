const routerChat = require("./chats.routes");
const routerUser = require("./user.routes");

const routesApi = (app) => {
  app.use('/chats', routerChat);
  app.use('/users', routerUser);
  app.use('/', (req, res) => { res.json({ message: 'Hola' }) });
};


module.exports = routesApi;