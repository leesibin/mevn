let a = 1;
let b = 2;
[a,b] = [b,a]
console.log('a'+a,'b'+b)  //a2 b1

/*전통스왑 방식*/
let aa = 11
let bb = 22
let temp
temp = aa
aa = bb
bb = temp
console.log('aa:'+aa,'bb:'+bb,)  //aa:22 bb:11

/*배열요소쉽게담기*/
const d =_=>[1,2,3,4]
const [ax,bx,cx] = d()
console.log('ax:'+ax,'bx:'+bx,'cx:'+cx) //ax:1 bx:2 cx:3 ; 값지정하지않으면 삭제

