// FIFO : 모든언어의 요구되는처리과정
class Queue{
    constructor(){
        this.a = []
    }
    front(){
        if(this.a.length===0){
        console.log('큐가 비었습니다.')
        return
    }else return this.a[0]
    }
    enqueue(value){
        this.a.push(value)
    }
    dequeue(){
        if(this.a.length===0){
            console.log('큐가 비었습니다.')
            return
        }
        this.a.shift()
    }
}
const q =new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
for(let i=0; i<4; i++){
    console.log(q.front()) //a에 있는 데이터중 첫번째를 보여줌
        q.dequeue() // a이 있는 첫번째 데이터를 삭제
}

