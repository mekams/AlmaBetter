let a =alert(`********Welcome to Basic Calculator***********`)
let input =parseInt(prompt(`Enter the number from options as below: \n
                        1.Addition\n
                        2.Subtraction\n
                        3.Multiplication\n
                        `))
// -------------------------------------------------------------------------------------------
let num,k=0,m,i,mul=1;  //Defining variables 
switch(input){
    case 1:
    m=parseInt(prompt('Enter how many numbers to add ?')) //User promt to add how many numbers.
    for(i=1;i<=m;i++){
    num =parseFloat(prompt(`Enter the number ${i}:`)) //User prompt til m variable satisfies
    k+=num
    }
    console.log(`The sum of ${m} numbers is: `,k)   //Output
    break;
// --------------------------------------------------------------------------------------------
    case 2:
    a= alert(`********Subtract number 1 from number 2*********`)
    for(i=1;i<=2;i++){
    num =parseFloat(prompt(`Enter the number ${i}:`)) //User prompt for 2 numbers only (number 2 - number 1)
    k= num - k
    }
    console.log(`The difference between ${i-1} numbers is: `,k)   //Output
    break;
// ---------------------------------------------------------------------------------------------
    case 3:
    m= parseInt(prompt('Enter how many numbers to multiply ?')) //User prompt to multiply how many numbers.
    for(i=1;i<=m;i++){
    num =parseFloat(prompt(`Enter the number ${i}:`)) //User prompt til m variable satisfies
    mul*=num
    }
    console.log(`The multiplication of ${m} numbers is: `,mul)   //Output
    break;
// ----------------------------------------------------------------------------------------------
    default:
        console.log(`You type an invalid input which is ${input}`)
}