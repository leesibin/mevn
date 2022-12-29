const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const PORT = 3000;
const _path = path.join(__dirname, "/");
console.log(_path);
app.use("/", express.static(_path));
app.use(logger());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//post 개인정보 등을 숨겨주고 가려줬어 사생활정보에 유용
app.post("/info", function (req, res) {
  const id = req.body.iid;
  const pass = req.body.ipw;
  const textr = req.body.itext;
  console.log(id, pass, textr);
  res.send("확인되었습니다.");
});

app.listen(PORT, () => {
  console.log(`너의 서버는? ${PORT}!`);
});
