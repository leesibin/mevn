const Photo = require("./p346_CRUD_ori.js");
const main = async () => {
  const t = await Photo.findOne(
    {
      title: { $eq: "홍경식" },
    },
    { title: 1, _id: 0 }
  ).lean(); //속도 4배정도 빠르다.
  console.log(t);
};
main();
