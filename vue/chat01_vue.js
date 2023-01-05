const { Server } = require("socket.io");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const http = require("http");
const multer = require("multer");
const { type } = require("os");
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 3000;
const _path = path.join(__dirname, "./dist");
console.log(_path);

app.use("/", express.static(_path));
app.use(logger("tiny"));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// const storage = multer.diskStorage({
//   destination: (req, res, cb) => {
//     cb(null, _path); //경로를 같은 폴더에 설정
//   },
//   filename: (req, res, cb) => {
//     cb(null, res.originalname); //오리지날네임 설정
//   },
// });
// let upload = multer({ storage: storage }); //멀터 옵션을 오브젝트로 설정

// app.post("/up", upload.single("ufile"), (req, res, next) => {
//   //파일 단독으로 전승옵션
//   console.log(
//     res.send(`<script>alert("파일 업로드 완료!");history.go(-1);</script>`)
//   );
// });
let name, toname, content;
io.on("connection", (socket) => {
  socket.on("newUser", (name) => {
    socket.name = name;
    console.log(name);
    io.emit("chat", {
      message: name + "님이 접속하였습니다.",
    });
    socket.on("disconnect", () => {
      console.log(socket.name);
      io.emit("chat", {
        message: socket.name + "님이 퇴장하셨습니다.",
      });
    });
  });
  socket.on("chat", (msg) => {
    io.emit("chat", msg); //보낼 내용
  });
});

server.listen(port, () => {
  console.log(port + "에서 서버 동작 완료.");
});
