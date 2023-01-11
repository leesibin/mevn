require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const lostark = "https://lostark.game.onstove.com/Main";
const hip =
  "https://onairing.com/files/attach/images/147/862/046/001/fa930e8877715d94d43fa581c410d391.jpg";
// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.botid;

const time = new Date();

const k_time = time.toLocaleString();
const hour = time.getHours();
const minute = time.getMinutes();
const timestamp = hour + ":" + minute;
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/^저장해/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.

bot.on("message", (msg) => {
  if (msg.text === "반갑습니다") {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "응안반가워");
  }
});
bot.on("message", (msg) => {
  if (msg.text === "김수환") {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "멍청이입니다.");
  }
});
bot.on("message", (msg) => {
  if (msg.text === "피곤해요") {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "자던지");
  }
});
bot.on("message", (msg) => {
  if (msg.text === "그치") {
    const chatId = msg.chat.id;
    const fileId =
      "AgACAgUAAxkBAAIBcWO-EDPLyuiuA8I1o1D-Rab6uVKLAALztjEbAg3wVX0U0j5-Qq4AAQEAAwIAA20AAy0E";
    bot.sendMessage(chatId, fileId);
  }
});

bot.on("message", (msg) => {
  if (msg.text === "최고의 게임?") {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "포모스선정2023년최고의게임입니다.\n" + lostark);
  }
});
bot.on("message", (msg) => {
  setInterval(() => {
    if (msg.text === "이시빈인성") {
      const chatId = msg.chat.id;
      bot.sendMessage(chatId, "김수환 이놈!");
    }
  }, 3000);
});
bot.on("message", (msg) => {
  if (msg.text === "시간") {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, k_time);
  }
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  // bot.sendMessage(chatId, "뿌요?");
  console.log(msg);
});

bot.on("message", (msg) => {
  if (msg.text === "사진") {
    const chatId = msg.chat.id;
    const fileId =
      "AgACAgUAAx0CZIK4dgACAlBjvggc-N1pXJxzE6WJI4OHSO09SgACLrIxG0Sh8FWSvgmS3-ceewEAAwIAA3gAAy0E";
    bot.sendPhoto(chatId, fileId);
    console.log(msg);
  }
});
const id = -679408568;
bot.on("message", (msg) => {
  if (msg.text === id) {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "아니");
  }
});
