console.log('Hi!')
setTimeout(function timeout(){
    console.log('async function1 complete')
},3000)
setTimeout(function timeout(){
    console.log('async function1 complete')
},3000)
console.log('come on yo!')

/*동시에 적용*/
// Hi!
// come on yo!
// async function1 complete
// async function1 complete