require("dotenv").config();
const axios = require("axios"); //requset 보다 좀더 편리하고 기능이추가 사이트 끌어오기 용하다
const cheerio = require("cheerio"); //제이쿼리 문법을 살짝 묻힘 선택자용도
const TelegramBot = require("node-telegram-bot-api");
const token = process.env.botid;
const bot = new TelegramBot(token, { polling: true });
const url = "https://finance.naver.com/item/main.nhn?code=005930";

// Matches "/echo [whatever]"
bot.onText(/^저장해/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const opop = match[1].replace(msg.text, msg.text);

  const resp = "기억합니다";
  bot.sendMessage(chatId, resp + opop);
});

// Listen for any kind of message. There are different kinds of
// messages.
let menu = [];
axios.get(url).then((res) => {
  let $ = cheerio.load(res.data);
  $("#chart_area").each(function () {
    menu.push($(this).text());
  });
});

bot.on("message", (msg) => {
  if (msg.text === "안녕") {
    const chatId = msg.chat.id;
    console.log(msg);
    bot.sendMessage(chatId, "안녕하세요");
    console.log("chatId");
  }
});
bot.on("message", (msg) => {
  if (msg.text === "삼성주식") {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, menu[0]);
  }
});
