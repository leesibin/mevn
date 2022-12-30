const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const PORT = 3000;
const fs = require("fs");
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

app.post("/fadd", function (req, res) {
  let name = req.body.name;
  let age = req.body.age;
  let num = 1;
  fs.stat(_path + name + ".txt", (err, stats) => {
    if (stats) {
      res.send(
        `<script>alert("${name}.txt 파일이 이미 존재합니다!${name}.txt 이름으로 저장합니다.");history go(-2)</script>`
      );
      fs.writeFile("/test.1" + name + ".txt", age, (e) => {
        if (e) throw e;
      });
    } else {
      fs.writeFile("/test.1" + name + ".txt", age, (e) => {
        if (e) throw e;
        res.send(`<script>alert("${name}.txt 파일 저장완료!")</script>`);
      });
    }
    console.log(stats ? "파일이 존재합니다." : "파일이 없습니다.");
  });
});
app.post("/padd", (req, res) => {
  let name = req.body.names;
  fs.stat(_path + name + ".txt", (err, stats) => {
    if (stats) {
      res.send(
        `<script>alert("${name} 폴더이 이미 존재합니다!${name}.txt 이름으로 저장합니다.");history go(-2)</script>`
      );
    } else {
      fs.mkdir(path.name (err) => {
        if (err) {
          return console.error(err);
        }
        console.log("Directory created successfully!");
      });
    }
  });
});

// app.post("/add", (req, res) => {
//   fs.exists(_path, (exists) => {
//     console.log(exists ? "Found" : "Not Found");
//   });
//   fs.mkdir(path.join(__dirname, "test.1"), { recursive: true }, (err) => {
//     if (err) {
//       return console.error(err);
//     }
//     console.log("Directory created successfully!");
//   });
// });

app.listen(PORT, () => {
  console.log(`너의 서버는? PORT!`);
});
