const { Router } = require("express");
const { CreateUser } = require("../controllers/user.controllers");

const routerUser = Router();

routerUser.route('/')
  .post(CreateUser);

module.exports = routerUser