const express = require('express')
// import express from 'express'

const path = require('path') //경로를 활용할 수있는 유틸
const logger = require('morgan')
const app = express()
const PORT = 8000
const _path = path.join(__dirname,'./p193') //경로를 합쳐줌
console.log(_path)

app.use('/',express.static(_path)) //절대경로로 접근
app.use(logger('tiny'))

app.listen(PORT,()=>{
    console.log(`너의 서버는? ${PORT}!`)
})