const url ='https://api.upbit.com/v1/ticker?markets=KRW-doge'

async function requset(url){
    const respose = await fetch(url)
    const data = await respose.json()
    return data
}
 //async await가 완료가 되면 실행하게 하라
async function view(){
    const dataList = await requset(url)
    console.log(dataList[0].trade_price)
}
view()