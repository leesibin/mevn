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

io.on("connection", (socket) => {
  socket.on("newUser", (name) => {
    console.log(name);
    io.emit("chat", {
      message: name + "님이 접속하였습니다.",
    });
    socket.on("disconnect", () => {
      console.log(name);
      io.emit("chat", {
        message: name + "님이 퇴장하셨습니다.",
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
