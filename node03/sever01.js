const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const multer = require("multer");
const PORT = 3000;
const _path = path.join(__dirname, "/");
console.log(_path);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", express.static(_path));
app.use(logger());

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, res.originalname);
    filename_or = res.originalname;
  },
});
let upload = multer({ storage: storage });

app.post("/up", upload.single("ufile"), (req, res, next) => {
  console.log(req.file);
});

app.listen(PORT, () => {
  console.log(`너의 서버는? PORT!`);
});
