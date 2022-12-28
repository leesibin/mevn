const log = console.log
function* gen(){
    yield 10
    if (false) yield 20 //r건너뜀
    yield 30
    return 90 //리턴에서 종료,하단실행 x
    yield 40 //끝남

}
/*방법 1*/ 
// let iter = gen()
// console.log(iter)
// log(iter.next()) //value: 10, done: false
// log(iter.next()) //value: 30, done: false
// log(iter.next()) //value: 90, done: true

/*방법 2*/
console.log(...gen()) //결과물 바로 반환