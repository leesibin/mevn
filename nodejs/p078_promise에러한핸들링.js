const a = (c='네이버')=>{
    return new Promise((resolve,reject)=>{
        // reject (new Error('[내부에러1]'))   //에러 던지는 방법 세종류
        // throw new Error('[내부에러2]')
        reject('[내부에러3]')
        resolve('난정상이야')
        setTimeout(()=>{
        resolve(`${c}로부터 받은 사랑`)},1000)
    })
}
a().then(ret => {
    return a('카카오')
}).then((ret) => {
    console.log(ret)
}).catch((err) => {
    console.log(err+'발생!')
});