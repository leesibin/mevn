const mongoose = require("mongoose");
const Photo = require("../note/p343/photo.js");
const fs = require("fs");
const path = require("path");
const mongDB = "mongodb://127.0.0.1/my_database";
mongoose
  .connect(mongDB, { useNewUrlParser: true })
  .then(() => console.log("connection successful"))
  .catch((err) => console.error(err));
const _path = path.join(__dirname, "./note/photo.json");
const main = async () => {
  const t = JSON.parse(fs.readFileSync(_path).toString());
  console.time("5000건의 데이터 삽입");
  Photo.insertMany(t, function (err, docs) {
    console.timeEnd("5000건의 데이터 삽입");
  });
};
main();
