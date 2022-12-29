//태그를 누르면 해당하는 태그가 나온다.
const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const PORT = 3000;
const _path = path.join(__dirname, "./dist");
console.log(_path);

app.use("/", express.static(_path));
app.use(logger());

app.get("/story", function (req, res) {
  const arr = [
    "my life is pretty",
    "Egg is Life",
    "Cute & I do not have cat",
    "Avengers all Dead",
  ];
  const pick = `<h2>
  
    <ul><li><a href="/story?id=0">Pretty</a></li>
    <li><a href="/story?id=1">Egg</a></li>
    <li><a href="/story?id=2">Tom</a></li>
    <li><a href="/story?id=3">Cat & Dog</a></li>
    </ul>
    </h2>
    <h1>${arr[req.query.id] ?? "골라보세요"}</h1>`;
  res.send(pick);
  //   res.send(arr[req.query.id]);
});

app.listen(PORT, () => {
  console.log(`너의 서버는? PORT!`);
});
