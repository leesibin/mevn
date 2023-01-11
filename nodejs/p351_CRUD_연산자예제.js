require("dotenv").config();
const mongoose = require("mongoose");
const USER = process.env.dbid;
const PWD = process.env.dbpwd;
const HOST = process.env.dbhost;
const DB = "mdb";
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`;
// mongoose.set('useFindAndModify', false) // 6.0 이후부터는 자동관리
mongoose.set("strictQuery", false); // 6.0 이후 권장사항
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));
const Photo = require("./p343/photo.js");
module.exports = Photo;
const Photo = require("./p346_CRUD_ori.js");
const main = async () => {
  const _data = {
    albumId: 12010,
    id: 12010,
    title: "이시빈",
    url: "google.com",
    thumbnailUrl: "https://naver.com",
  };
  const new_photo = new Photo(_data);
  const t = await new_photo.save();
  console.log(t);
};
main();
