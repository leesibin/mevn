const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  console.log('1 Time:', Date.now())
  next()
})

app.use((req, res, next) => {
    console.log('2 Time:', Date.now())
    next()
  })

app.listen(port, () => {
  console.log(`소환사의 협곡에 오신것을 환영합니다. ${port}`)
})