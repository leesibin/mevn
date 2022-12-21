const a = (c='나가자')=>{
    return new Promise((resolve,reject)=>{  //new Promise(매개변수) = new Promise()
        //비동기 함수로직
        setTimeout(()=>{
            resolve(`${c}`)
        },1000)
    })
}
a().then(ret=>{
    console.log(ret)
    return a(`싸우자`)
})
.then(ret =>{
    console.log(ret)
    return a(`이기자`)
})
.then(ret =>{
    console.log(ret)
})