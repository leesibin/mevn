bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "뿌요?");
});
