const Photo = require("./p346_CRUD_ori.js");
const main = async () => {
  const t = await Photo.findOne({
    $or: [
      {
        title: {
          $eq: "홍경식",
        },
      },
      {
        url: {
          $eq: "http://naver.com/",
        },
      },
    ],
  }).lean(); //속도 4배정도 빠르다.
  console.log(t);
};
main();
