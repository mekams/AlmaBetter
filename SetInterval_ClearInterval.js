console.log(1)
console.log(2)

function greet(k='stranger'){
    let id= setInterval(() => {
            console.log(`Hello ${k}`)
        }, 3000);
    // clearInterval(id)  //----------->>>>>>>>Uncomment this line to abort function greet<<<<<<----------//
}
console.log('3 Seconds to start the function')

// greet('Kam$')
// --------------------------------Time print 5 times------------------------------------------
let count=0;
let Interval=setInterval(()=>{
    count+=1;
    if(count===5){
        clearInterval(Interval)
    }
    let date =new Date();
    let time= date.toLocaleTimeString();
    console.log(time)
},2000)