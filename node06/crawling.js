const axios = require("axios"); //requset 보다 좀더 편리하고 기능이추가 사이트 끌어오기 용하다
const cheerio = require("cheerio"); //제이쿼리 문법을 살짝 묻힘 선택자용도
const url =
  "https://www.pusan.ac.kr/kor/CMS/MenuMgr/menuListOnBuilding.do?mCode=MN202";

axios.get(url).then((res) => {
  let menu = [],
    day = [],
    date = [];
  let $ = cheerio.load(res.data);
  $(".day").each(function () {
    day.push($(this).text());
  }); //each()안의 내용이 각각 출력하기
  $(".date").each(function () {
    date.push($(this).text());
  }); //each()안의 내용이 각각 출력하기
  $(".menu-tit01~p").each(function () {
    menu.push($(this).text());
  }); //each()안의 내용이 각각 출력하기
  for (i in menu) {
    console.log(`${day[i]}${date[i]}\n${menu[i]}`);
  }
});
