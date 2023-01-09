require("dotenv").config();
const request = require("request");
const { XMLParser, XMLBuilder, XMLValidator } = require("fast-xml-parser");
const parser = new XMLParser();

let key = "?ServiceKey=" + process.env.pkey;
let sname = encodeURI("사하구"); //한글로 번역했어 소환시켜줌

const url =
  "http://apis.data.go.kr/6260000/FestivalService/getFestivalKr" +
  key +
  "&pageNo=4&numOfRows=4&GUGUN_NM=" +
  sname;

console.log("디코딩 한글" + sname);
console.log("인코딩 한글" + decodeURI("%EC%82%AC%ED%95%98%EA%B5%AC"));
request(url, (e, res, body) => {
  const rst = parser.parse(body);
  console.log(rst);
  const _ = rst.response.body.items.item[0];
  console.log(_);
});
