const express = require('express')
const path = require('path') //경로를 활용할 수있는 유틸
const logger = require('morgan')
const app = express()
const PORT = 3000
const _path = path.join(__dirname,'./p193') //경로를 합쳐줌
console.log(_path)
app.use('/',express.static(_path)) //절대경로로 접근
app.use(logger('tiny'))
//커스텀 미들웨어
app.use((req,res,next)=>{
    console.log('요청이 왔네요~ 지나갑니다~')
    next()
})

// app.get('/book/:bookName',(req,res)=>{
//     // const {bookName} = req.params
//     res.send(`안녕하세요 시빈이네 서점입니다.${req.params.bookName}을 주문하셨군요!`)
// })
app.listen(PORT,()=>{
    console.log(`너의 서버는? ${PORT}!`)
})