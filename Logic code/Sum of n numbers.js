let m=parseInt(prompt('Enter how many numbers to add ?')) //User promt to add how many numbers.
let num=0,k=0;  //Defining variables 

for(let i=1;i<=m;i++){
    num =parseFloat(prompt(`Enter the number ${i}:`)) //User prompt til m variable satisfies
    k+=num
}
console.log(`The sum of ${m} numbers is: `,k)   //Output