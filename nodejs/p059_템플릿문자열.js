const person = {
    'age' : 21,
    'name' : '큰돌'
}
const tag = `<p>나의나이는${person.age}입니다.</p>` //<p>나의나이는21입니다.
const tag2 = `<p>${person.name}님 환영합니다.</p>`  //<p>큰돌님 환영합니다.</p>
console.log(tag,tag2)