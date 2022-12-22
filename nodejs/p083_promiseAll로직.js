const asy = (message,ret)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(message)
            console.log(new Date())
            resolve(ret)
        },2000)
    })
}

const promsie = [asy('비동기함수1발동',1),asy('비동기함수2발동',2),asy('함정카드발동',3)]

const timeTest = async ()=>{
console.time('promiseAll측정')
Promise.all(promsie).then(data=>console.log(data))
console.timeEnd('promiseAll측정')
}
timeTest() //시간측정 2초걸림