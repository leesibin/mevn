import fetch from 'node-fetch'
const url = 'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'

async function requset(url){
    const respose = await fetch(url)
    const data = await respose.json()
    return data
}
 //async await가 완료가 되면 실행하게 하라
async function view(){
    const dataList = await requset(url)
    // console.log(dataList)
    console.log(dataList[0].basePrice+'원')
}
view()