require("dotenv").config();
const request = require("request");
const { XMLParser, XMLBuilder, XMLValidator } = require("fast-xml-parser");
const parser = new XMLParser();
// let jObj = parser.parse(XMLdata);

let key = "?serviceKey=" + process.env.pkey;
let sname = encodeURI("해운대구"); //한글로 번역했어 소환시켜줌

const url =
  "http://apis.data.go.kr/6260000/BusanBIMS/busStopList" +
  key +
  "&pageNO=1&numOfRows=10&bstopnm=" +
  sname;

console.log("디코딩 한글" + sname);
console.log("인코딩한글" + decodeURI("%EC%84%9C%EB%A9%B4%EC%97%AD"));
request(url, (e, res, body) => {
  const rst = parser.parse(body);
  console.log(rst);
  const _ = rst.response.body.items;
  console.log(_);
});
