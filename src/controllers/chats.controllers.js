const { ChatServices } = require("../services/chats.services");

const messageChat = async (req, res) => {
  const result = await ChatServices.messageChat(req.body.messages);
  res.json({ ...result });
};

const CreateChat = async (req, res) => {
  const { user1, user2 } = req.body;
  try {
    const result = await ChatServices.createChat();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  messageChat,
  CreateChat,
}