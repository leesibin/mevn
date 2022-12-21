module.exports.handleBook =(req,res)=>{
    console.log('안녕'+req.params)
    res.send(req.params)

}
module.exports.intro = (req,res)=>{
    res.send('우리의 Express로 만든 서버입니다.~!!!!')
}
