const express = require('express')
const path = require('path')
const logger = require('morgan')
const app = express()
const PORT = 3000
const _path = path.join(__dirname, './dist')
console.log(_path)

app.use('/', express.static(_path))
app.use(logger())

app.get('/pw', function (req, res) {
  res.send(
    `[비밀번호변경창]<br>
        ${req.query.id}님 안녕하세요.
        ${req.query.pw}의 비밀번호를 수정 하시겠어요?
        ${req.query.pw}==> <a href="/inf>변경`
  )
})

app.listen(PORT, () => {
  console.log(`너의 서버는? PORT!`)
})
