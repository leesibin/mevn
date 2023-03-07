const http = require('http')
http.createServer((req,res)=>{
    console.log(req.headers.cookie)
    // Parmanent-cookies 
    // ;Secure; HttpOnly 
    res.writeHead(200,{
        'Set-Cookie': ['yummy_cookie=choco;Secure; HttpOnly','tasty_cookie=strawberry',`Parmanent-cookies;Max-Age=${60*60*24}`]
        })
    // res.end('Cooki test!') //if문으로 
    res.end('hello world')

}).listen(3000)