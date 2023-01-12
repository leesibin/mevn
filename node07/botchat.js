require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const token = process.env.botid;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/save (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1] + "기억합니다 ";
  bot.sendMessage(chatId, resp);
});

bot.on("message", (msg) => {
  if (msg.text === "반갑습니다") {
    const chatId = msg.chat.id;
    console.log(log);
    bot.sendMessage(chatId, "응안반가워");
  }
});
