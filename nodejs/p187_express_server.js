const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/img', (req, res) => {
    res.send('main경로로 오신 것을 환영합니다.')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})