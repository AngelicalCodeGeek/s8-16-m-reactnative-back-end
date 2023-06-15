const { Router } = require("express");
const { messageChat, CreateChat } = require("../controllers/chats.controllers");

const routerChat = Router();

// routerChat.route('/')
//   .post(messageChat);

routerChat.route('/new')
  .post(CreateChat);

routerChat.route('/ia')
  .post(messageChat)
  .get((req, res) => { res.json({ messageChat: 'Est es chat' }) })

module.exports = routerChat