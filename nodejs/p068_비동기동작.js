const job1=()=>{
    const b = Math.random()*100
    setTimeout(()=>{
        console.log(1)
    },b)
}

const job2=()=>{
    const b = Math.random()*100
    setTimeout(()=>{
        console.log(2)
    },b)
}

const job3=()=>{
    const b = Math.random()*100
    setTimeout(()=>{
        console.log(3)
    },b)
}
job1()
job2()
job3()
// 일처리가 빨리 가는 순서대로 출력