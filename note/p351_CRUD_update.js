const Photo = require("./p346_CRUD_ori.js");
const main = async () => {
  const t = await Photo.updateMany(
    {
      title: {
        $eq: "홍경식",
      },
    },
    {
      $set: { url: "https://www.naver.com" },
    },
    {
      upsert: true,
      multiple: true,
      new: true,
    }
  ).lean(); //속도 4배정도 빠르다.
  console.log(t);
};
main();
