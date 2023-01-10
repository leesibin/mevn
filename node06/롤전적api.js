const axios = require("axios"); //requset 보다 좀더 편리하고 기능이추가 사이트 끌어오기 용하다
const cheerio = require("cheerio"); //제이쿼리 문법을 살짝 묻힘 선택자용도
const url =
  "https://lol.inven.co.kr/dataninfo/match/champTotal.php?iskin=lol&category=LCK2022&category2=&shipcode=&shipgroup=&teamName=&startDate=&endDate=";

axios.get(url).then((res) => {
  let rank = [];
  let left = [];

  let $ = cheerio.load(res.data);
  for (let i = 0; i <= 19; i++) {
    let ben = Number(rank[i]);
    $(".listTable>table>tbody>tr>td:nth-child(1)").each(function () {
      rank.push($(this).text());
      rank.sort(function (a, b) {
        return b - a;
      });
    });
    $(".listTable>table>tbody>tr>td:nth-child(2)").each(function () {
      left.push($(this).text());
    });
    // $(".listTable>table>tbody>tr>td:nth-child(3)").each(function () {
    //   benlist.push($(this).text());
    // });
    console.log(typeof rank[i]);
    console.log(`${rank[i]}${left[i]}`);
  }
});
