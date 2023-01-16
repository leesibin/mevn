const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const port = 3000;
const _path = path.join(__dirname, "./dist");
const axios = require("axios"); 
const cheerio = require("cheerio");
//기업api
var client_id = process.env.id; 
var client_secret = process.env.secret;
//크롤링 api
const url =
  "https://www.pusan.ac.kr/kor/CMS/MenuMgr/menuListOnBuilding.do?mCode=MN202";
 
console.log(_path);
app.use("/", express.static(_path));
app.use(logger("tiny"));


//번역용
let api_url = 'https://openapi.naver.com/v1/papago/n2mt'
const request = require('request')
io.on('connection', (socket) => {
  socket.on('trans', (msg) => {
    let options = {
      url: api_url,
      form: { source: 'ko', target: 'en', text: msg },
      headers: {
        "X-Naver-Client-Id": client_id,
        "X-Naver-Client-Secret": client_secret,
      }
    }
    request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const rst = JSON.parse(body)
        io.emit('trans', rst.message.result.translatedText)
      } else {
        console.log('error = ' + response.statusCode)
      }
    })
  })
})

//학식정보
axios.get(url).then((res) => {
  let menu = [],
    day = [],
    date = [];
  let $ = cheerio.load(res.data);
  $(".day").each(function () {
    day.push($(this).text());
  });
  $(".date").each(function () {
    date.push($(this).text());
  });
  $(".menu-tit01~p").each(function () {
    menu.push($(this).text());
  });
  for (i in menu) {
    console.log(`${day[i]}${date[i]}\n${menu[i]}`);
  }
});



server.listen(port, () => {
  console.log(port + "에서 서버 동작 완료.");
});