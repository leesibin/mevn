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
    throw '에러'
    console.log(result) //4
},reason=>{
    console.log(`이 promsie는 이${reason}으로 종료가 되었습니다.`)

})

//.then(result,reason)결과물에 대한 반환값
// Promise의 매개변수역할 (throw주석하면 result 적용),(아니면 역할) 