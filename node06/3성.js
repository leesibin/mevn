const axios = require("axios"); //requset 보다 좀더 편리하고 기능이추가 사이트 끌어오기 용하다
const cheerio = require("cheerio"); //제이쿼리 문법을 살짝 묻힘 선택자용도
const url = "https://finance.naver.com/item/main.nhn?code=005930";

axios.get(url).then((res) => {
  let menu = [];
  let $ = cheerio.load(res.data);
  $(".rate_info>.today>.no_today>.no_down>span").each(function () {
    menu.push($(this).text());
  }); //each()안의 내용이 각각 출력하기

  console.log(menu[0]);
});
