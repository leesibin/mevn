const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const multer = require("multer");
const PORT = 3000;
const _path = path.join(__dirname, "/");
console.log(_path);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", express.static(_path));
app.use(logger());

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, _path); //경로를 같은 폴더에 설정
  },
  filename: (req, res, cb) => {
    cb(null, res.originalname); //오리지날네임 설정
  },
});
let upload = multer({ storage: storage }); //멀터 옵션을 오브젝트로 설정

app.post("/up", upload.single("ufile"), (req, res, next) => {
  //파일 단독으로 전승옵션
  console.log(
    res.send(
      `<script>alert("파일 업로드 완료!");location.replace('index.html')</script>`
    ) //location.replace 파일정리해주는 역할
  ); //history.go(-1);
});

app.listen(PORT, () => {
  console.log(`너의 서버는? PORT!`);
});
