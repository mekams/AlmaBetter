let {DateTime}= require('luxon')
 
let now =DateTime.now() // common variable shortcut---destructuring

let r= now.toString()
 console.log(r)


 let res =now.minus({day:2})
 console.log('\n', res)