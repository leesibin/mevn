const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('김수환 : 사실 민초 좋아해->/main해보세요')
})

app.get('/main', (req, res) => {
    res.send('민초 사탕먹고싶다.')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})