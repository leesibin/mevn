const express = require('express')
const loogger = require('morgan')
const app = express()
const PORT = 3000
app.use('/',express.static('D:/JS/MEVN/nodejs/p193')) //정적 접근 폴더 지정
app.use(loogger('tiny'))
app.listen(PORT,()=>{
    console.log(`we are world?${PORT}!`)
})
