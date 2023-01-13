const Photo = require("./p346_CRUD_ori.js");
const main = async () => {
  const t = await Photo.updateMany(
    {
      title: {
        $in: ["이시빈", "이주민", "홍경식", "김수환"],
      },
    },
    {
      $push: {
        something: { $each: [1, 2, 3] },
      },
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
