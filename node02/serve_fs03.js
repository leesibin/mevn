//글생성하기
const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const fs = require("fs");
const PORT = 3000;
const _path = path.join(__dirname, "/");
console.log(_path);
app.use("/", express.static(_path));
app.use(logger("tiny"));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// fs.stat(_path + "김두환.txt", (err, stats) => {
//   console.log(stats ? "파일이 존재합니다." : "파일이 없습니다.");
// });

//post 개인정보 등을 숨겨주고 가려줬어 사생활정보에 유용
app.post("/info", function (req, res) {
  let name = req.body.name;
  let age = req.body.age;
  let num = 1;
  fs.stat(_path + name + ".txt", (err, stats) => {
    if (stats) {
      res.send(
        `<script>alert("${name}.txt 파일이 이미 존재합니다!${name}.txt 이름으로 저장합니다.");history go(-2)</script>`
      );
      fs.writeFile(_path + name + ".txt", age, (e) => {
        if (e) throw e;
      });
    } else {
      fs.writeFile(_path + name + ".txt", age, (e) => {
        if (e) throw e;
        res.send(`<script>alert("${name}.txt 파일 저장완료!")</script>`);
      });
    }
    console.log(stats ? "파일이 존재합니다." : "파일이 없습니다.");
  });
});

app.listen(PORT, () => {
  console.log(`너의 서버는? ${PORT}!`);
});
