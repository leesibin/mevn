const a = (c='네이버')=>{
    return new Promise((resolve,reject)=>{  //new Promise(매개변수) = new Promise()
        //비동기 함수로직
        setTimeout(()=>{
            resolve(`${c}로부터받은사랑`)
        },1000)
    })
}
a().then(ret=>{
    console.log(ret)
    return a(`카카오`)
}).then(ret =>{
    console.log(ret)
})