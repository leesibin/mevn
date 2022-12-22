const job1 = ()=>{
    return new Promise((resolve,reject)=>{  //new Promise(매개변수) = new Promise()
        const random = parseInt((Math.random()*1000)+1000)
        setTimeout(()=>{
            console.log(`${(random/1000).toFixed(1)}초만에 아메리카노 나왔습니다!`)
            resolve('job1') //to fixed 숫자 자리범위 지정
        },random)
    })
}

 const  job2 = ()=>{
    return new Promise((resolve,reject)=>{  //new Promise(매개변수) = new Promise()
        const random = parseInt((Math.random()*1000)+2000)
        setTimeout(()=>{
            console.log(`${(random/1000).toFixed(1)}초만에 라떼 나왔습니다!`)
            resolve('job2') 
        },random)
    })
 }

const  job3 = ()=>{
    return new Promise((resolve,reject)=>{  //new Promise(매개변수) = new Promise()
        const random = parseInt((Math.random()*2000)+3000)
         setTimeout(()=>{
            console.log(`${(random/1000).toFixed(1)}초만에 카푸치노 나왔습니다!`)
             resolve('job3')
        },random)
    })
 }
 const  job4 = ()=>{
     return new Promise((resolve,reject)=>{  //new Promise(매개변수) = new Promise()
         const random = parseInt((Math.random()*1000)+2000)
         setTimeout(()=>{
             console.log(`${(random/1000).toFixed(1)}초만에 비엔나 나왔습니다!`)
             resolve('비엔나')
        },random)
    })
}
const main = async()=>{
    await job1()
    await job2()
    await job3()
    await job4()
    await job5()
    await job6()

}
main()

