function countdown(task){
    console.log('Hello Kams ',task)
    const newTask = task-1
    if(newTask>0){
    countdown(newTask);
    }
}
countdown(3)

// const arr =[1,2,3,4,5,6,7,8,9,10];

// function sum(inp){
//     console.log(inp)
//     if(inp.length===1){
//         console.log(inp)
//         return inp[0];
//     }
//     else{
//         // console.log(inp)
//         return inp.pop() + sum(inp);
//     }
// }

// console.log(sum(arr))
// console.log(arr)


// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

// const num = -1;

console.log(factorial(10))

// calling factorial() if num is non-negative
// if (num > 0) {
//     let result = factorial(num);
//     console.log(`The factorial of ${num} is ${result}`);
// }




