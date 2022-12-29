const express = require("express");
const path = require("path");
const logger = require("morgan");
const fs = require("fs"); //내장모듈

const app = express();
const PORT = 3000;
const _path = path.join(__dirname, "/");
console.log(_path);

app.use("/", express.static(_path));
app.use(logger("tiny"));

//CRUD
const file = "test1";
const data = "complete자바스크립트";
fs.writeFile(_path + file + ".txt", data, (e) => {
  if (e) console.log(e);
  console.log("파일이 작성이 완료되었습니다.");
});

app.listen(PORT, () => {
  console.log(`너의 서버는? ${PORT}!`);
});
