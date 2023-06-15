const Chat = require("./chat.model");
const Message = require("./message.model");
const Participant = require("./participant.model");
const User = require("./user.model");


const initModels = () => {
  User.hasMany(Chat, { as: 'chat', foreignKey: 'created_by' });
  Chat.hasOne(User, { as: 'user', foreignKey: 'created_by' });

  Message.belongsTo(Chat, { as: 'chat', foreignKey: 'chat_id' });
  Chat.hasMany(Message, { as: 'messages', foreignKey: 'chat_id' });

  Participant.belongsTo(Chat, { as: 'chat', foreignKey: 'chat_id' });
  Chat.hasMany(Participant, { as: 'participants', foreignKey: 'chat_id' });
  Participant.belongsTo(User, { as: 'user', foreignKey: 'user_id' });
  User.hasMany(Participant, { as: 'participating', foreignKey: 'user_id' });
};

module.exports = initModels;