console.log(1)
console.log(2)
// function greet(){
//     console.log('hello')
// }

let k=function(){
   let id= setTimeout(() => {
        console.log("Hello Timeout")
    }, 4000);
    // clearTimeout(id)      //----------->>>>>>>>Uncomment this line to abort function greet<<<<<<----------//
}

console.log(3)
// setTimeout(greet,5000)
k()


