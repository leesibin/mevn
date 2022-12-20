const d =()=>{return{'aame' : '최주원', 'job' : '마케터'}}
// const d = ()=>({'aame' : '최주원', 'job' : '마케터'}) 위 코드와 동일하다.
const {aame} = d()
console.log(aame) //최주원

const a2=[1,2]
const[b,c] = a2
console.log(b,c) //1 2

const a3 ={'Name' : '큰돌', '노래':'자취방좋아'}
const {Name,노래} = a3
console.log(Name,노래) //큰돌 자취방좋아q