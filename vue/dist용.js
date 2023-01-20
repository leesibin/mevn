require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const port = 3000;
const Photo = require("./ori.js");
const _path = path.join(__dirname, "./dist");
// console.log(_path);
app.use("/", express.static(_path));
app.use(logger("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/about", function (req, res) {
  // front 서버에서 post 방식으로 전송받음
  // console.log(req.body.resultgood);
  const A = req.body.resultgood;
  const B = req.body.resultgood;
  const main = async () => {
    const _data = {
      명령어: A,
    };
    console.log(_data.A, _data.B);
    const new_photo = new Photo(_data);
    const t = await new_photo.save();
    console.log(t);
  };
  main();
});

app.listen(port, () => {
  console.log(port + "에서 서버 동작 완료.");
});
