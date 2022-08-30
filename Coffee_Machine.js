let input =parseInt(prompt(`Enter the number from options as below: \n
                        1.Espresso\n
                        2.Normal Coffee\n
                        3.Black Coffee\n
                        4.Cappuccino`))
                        
switch(input){
    case 1:
        input='Espresso'
        console.log(`${input} will be ready with in 5 seconds.`)
        setTimeout(()=>{
        console.log(`Your ${input} is ready, please collect\n& have a nice day !`)
        },5000)
        break;
    
    case 2:
        input='Normal Coffee'
        console.log(`${input} will be ready with in 5 seconds.`)
        setTimeout(()=>{
        console.log(`Your ${input} is ready, please collect\n& have a nice day !`)
        },5000)
        break;

    case 3:
        input='Black Coffee'
        console.log(`${input} will be ready with in 5 seconds.`)
        setTimeout(()=>{
        console.log(`Your ${input} is ready, please collect\n& have a nice day !`)
        },5000)
        break;
    
    case 4:
        input='Cappuccino'
        console.log(`${input} will be ready with in 5 seconds.`)
        setTimeout(()=>{
        console.log(`Your ${input} is ready, please collect\n& have a nice day !`)
        },5000)
        break;

    default:
        input=`${input}`
        console.log(`${input} is invalid input`)
        break;
}
            