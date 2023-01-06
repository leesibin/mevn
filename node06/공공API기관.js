const request = require("request");

// const url = process.env.Aurl;

const url =
  "http://apis.data.go.kr/6260000/BusanJobOpnngInfoService/getJobOpnngInfo?ServiceKey=Mf0mYUXPO0j%2BAVVFPlR4Cp5Y6ZVPMy7ab2JdMWYDSIfUQNOa9VOYowGssZyia%2FPYndsuE6A8Q8MFKu4TlzyYbw%3D%3D&pageNo=4&numOfRows=4&resultType=json";
request(url, (e, res, body) => {
  const rst = JSON.parse(body);
  console.log(rst);
  const _ = rst.getJobOpnngInfo.body.items.item[0];
  console.log(`${_.recruitAgencyName}`);
});
