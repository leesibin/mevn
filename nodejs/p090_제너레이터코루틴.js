const log = console.log
function* map(f,list){
    for(const a of list){
        yield f(a)
    }
}
const add = (a) => a+10
const a = [1, 2, 3, 4, 5]
const cg = map(add,a)
log(cg.next()) //value: 11, done: false
log('어떤 로직 1')
log(cg.next()) //value: 12, done: false
log('어떤 로직 2')
log(cg.next()) //value: 13, done: false
log('어떤 로직 3')
log(cg.next()) //value: 14, done: false
log('어떤 로직 4')
log(cg.next()) //value: 15, done: false
log('어떤 로직 5')
log(cg.next()) //value: 16, done: false
log('어떤 로직 6')