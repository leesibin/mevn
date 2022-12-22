const job1 = ()=>{
    return new Promise((resolve,reject)=>{  //new Promise(매개변수) = new Promise()
        setTimeout(()=>{
            console.log(`물을 끓이고(기다림 ${Math.random()*1000}초)`)
            resolve('job1')
        },Math.random()*1000)
    })
}
const main = async()=>{
    await job1()

}
main()
