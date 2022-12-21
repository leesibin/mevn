module.exports.handleBook =(req,res)=>{
    let  u_name = req.param('name')
    let  b_name = req.param('bname')
    console.log(u_name,b_name)
    res.send('유저네임:'+u_name+'도서명:'+b_name)

}
module.exports.intro = (req,res)=>{
    res.send('Express의 통한 쿼리스트랑 값 가져오기')
}
