const a = ['사과','딸기','포도','배']
const it = a[Symbol.iterator]()
console.log(it.next()) //사과
console.log(it.next()) //사과 딸기
console.log(it.next()) //사과 딸기 포도
console.log(it.next()) //사과 딸기 포도 배
console.log(it.next())  //undefind