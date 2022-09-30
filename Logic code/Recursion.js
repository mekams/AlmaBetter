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

let num =5
// console.log(factorial(10))

// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}



// Write a JavaScript program to get the integers in range (x, y) using recursion.
// Input: range(1, 5)
// Output:[1, 2, 3, 4, 5]
// Explanation: All the number between 1 and 5.
// Constraints:Restrict to the input format that is mentioned.

function range(start, end){
    let li =[];
    recurse(start,end+1,li)
    console.log(li)
}

function recurse(start, end, li){
    if(end==start){
        return start;
    }
    else{
        let push =recurse(start,end-1,li)
        li.push(push)
    } 
     return end;
}
  range(1,4)