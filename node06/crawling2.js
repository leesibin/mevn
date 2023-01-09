const axios = require("axios"); //requset 보다 좀더 편리하고 기능이추가 사이트 끌어오기 용하다
const cheerio = require("cheerio"); //제이쿼리 문법을 살짝 묻힘 선택자용도
const url =
  "https://lol.inven.co.kr/dataninfo/match/champTotal.php?iskin=lol&category=LCK2022&category2=&shipcode=&shipgroup=&teamName=&startDate=&endDate=";

axios.get(url).then((res) => {
  let left = [];
  let $ = cheerio.load(res.data);
  $("#text").each(function () {
    left.push($(this).text());
  }); //each()안의 내용이 각각 출력
  console.log(`${left}`);
});
