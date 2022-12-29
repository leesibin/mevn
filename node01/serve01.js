//id 및 name 설정하는법
const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const PORT = 3000;
const _path = path.join(__dirname, "./dist");
console.log(_path);

app.use("/", express.static(_path));
app.use(logger());

app.get("/test", function (req, res) {
  res.send(req.query.id + " 그리고 " + req.query.name);
});
// http://localhost:3000/test?id=0707&name=홍길동
app.listen(PORT, () => {
  console.log(`너의 서버는? PORT!`);
});
