const asycn1 = param=>{
    return new Promise((resolve,reject)=>{
        resolve(param*2)
    })
}
const asycn2 = param=>{
    return new Promise((resolve,reject)=>{
        resolve(param*2)
    })
}
asycn1(1)
.then(asycn2)
.then(result=>{
    console.log(result) //4
    throw '에러'
})
.catch(reason=>{
    console.log(`이 promsie는 이${reason}으로 종료가 되었습니다.`)
})
.finally(reason=>{
    console.log(`시스템을 종료합니다.`)
})


