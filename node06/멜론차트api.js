const axios = require("axios"); //requset 보다 좀더 편리하고 기능이추가 사이트 끌어오기 용하다
const cheerio = require("cheerio"); //제이쿼리 문법을 살짝 묻힘 선택자용도
const { index } = require("cheerio/lib/api/traversing");
const url = "https://www.melon.com/chart/index.htm";

axios.get(url).then((res) => {
  let rank = [];
  let none = [];

  let $ = cheerio.load(res.data);
  for (let i = 0; i < 20; i++) {
    $(".rank").each(function () {
      rank.push($(this).text());
    });
    $(".wrap>.wrap_song_info>.ellipsis.rank01>span>a").each(function () {
      none.push($(this).text());
    });

    console.log(`${rank[i + 1]}${none[i]}`);
  }
});
