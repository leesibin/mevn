const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const fs = require("fs");
const PORT = 3000;
const _path = path.join(__dirname, "/");
console.log(_path);

app.use("/", express.static(_path));
app.use(logger());

app.use("/files", (req, res) => {
  fs.readdir(_path, "utf-8", (err, data) => {
    //서버의 폴더에 있는 파일 리스트를 읽어보인다.
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`너의 서버는? PORT!`);
});
// 파일리스트를 ul>li로 만들어서 누르면 내용이 보이게하라
