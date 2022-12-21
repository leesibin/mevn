const express = require('express')
const path = require('path')
const loogger = require('morgan')
const app = express()
const PORT = 3000
app.use('/dist',express.static('./p193')) //정적 접근 폴더 지정
app.use(loogger('tiny'))
//커스텀 미들웨어
app.use((req,res,next)=>{
    console.log('come baby!')
    next()
})

app.get('/book/:bookName',(req,res)=>{
    const {bookName} = req.params
    res.send(`안녕하세요 홍철이네 서점입니다.${bookName}을 주문하셨군요!`)
})
app.listen(PORT,()=>{
    console.log(`we are world?${PORT}!`)
})