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

app.post("/files", (req, res) => {
  fs.readdir(_path, (err, files, data) => {
    if (err) console.log(err);
    else {
      console.log("비상...");
      const pick = `<h2>
        <ul><li><a href="/list">${files[0]}</a></li>
        <li><a href="/list1">${files[1]}</a></li>
        <li><a href="/story?id=2">${files[2]}</a></li>
        <li><a href="/story?id=3">${files[3]}</a></li>
        </ul>
        </h2>`;
      res.send(pick);
    }
  });
});

app.post("/list", (req, res) => {
  fs.readFile(_path + "asd.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
});

app.get("/list1", (req, res) => {
  fs.readFile(_path + "dsad.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`너의 서버는? PORT!`);
});
