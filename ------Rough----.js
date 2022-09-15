// let n;
// n =parseInt(prompt('Enter a number : '));

// const { indexOf } = require("lodash")

// if(n%2===0){
//     if(n>=2 && n<=5){
//         console.log('Not Weird');
//     }
//     else if(n>=6 && n<=20) {
//         console.log('weird');
//     }
//     else{
//         console.log('Not Weird');
//     }
// }
// else{
//     console.log('Weird')
// }
// if(n%2 !==0 ||(n>5 && n<21)){
//     console.log('Weird');
// }
// else{
//     console.log('Not Weird')
// }

// const obj ={
//     place: 'Noida',
//     vehicle: 'BMW',
//     phone: 'Samsung',
//     greet:function(){
//         console.log(`The place is:`+this.place)
//     }
// }
// // delete obj.place
// obj.greet
// console.log(my(obj,'BMW'))

// function my(o,v){
//     return Object.keys(o).find(keys=>o[keys]===v)
// }

// let s =new Set(['hello','bye','went',{go:'went',to:2}])
// s.add(['he','she','come in'])
// console.log(typeof(s))
// let t=[1,2,3]//new Set('1234567890')
// let m=t.map(k =>{
//     return k*2});
// console.log(m)


// let m = new Map([
//     [1],
//     ["apple","Kams"],
//     ["k",3]
// ])
// // m.set(3,45,6)
// // console.log(m)
// let k= m.get("apple")
// console.log(k)

// const obj ={
//         place: 'Noida',
//         vehicle: 'BMW',
//         phone: 'Samsung',
//         greet:function(){
//             console.log(`The place is:`+this.place)
//         }
//     }
// // let j_Js=JSON.stringify(obj)
// obj.table="brown"
// let j_Js=JSON.stringify(obj)
// console.log(j_Js)

// // let k =console.log(obj)
// let p= JSON.parse(j_Js)
// console.log(p)


// let fruit = prompt('Enter a fruit name to check in database : ');
// switch(fruit){
//     case 'Banana':
//     case 'Mango':
//     case 'Guava':
//         console.log(`${fruit} is a fruit found in database`)
//         break;
//     default:
//         console.log(`${fruit} Not found`)
// }






// const obj ={
//         place: 'Noida',
//         vehicle: 'BMW',
//         phone: 'Samsung',
// }

// function func(){
//     console.log('Called')
// }
//  func.prop= 5
//  console.log(func() || func.prop)



// let arr =[1,2,3,4]
// let r = arr.reduce((x,y) =>x+y)

// console.log(r)
  
// let arr =[1,2,3,4]
// /*let res =*/arr.map(n=>console.log(n))
// console.log(res)


// // name declared with const cannot be changed
// let name = 'Sara';
// console.log(name)
// name='kams'
// console.log(name)

// class Person {
//     constructor(name,hey) {
//       this.k = name;
//       this.h=hey
//     }
//   }
  
//   const person1 = new Person('John');
//   console.log(person1.k); // John


// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'
// }

// let { name, age, gender } = person;

// console.log(name); // Sara
// console.log(age); // 25
// console.log(gender); // female



// returns a promise
// let countValue = new Promise(function (resolve, reject) {
//     resolve('Promises');
//  });
 
//  // executes when promise is resolved successfully
//  countValue.then(
//      function (result) {
//          console.log('Res '+result); // Promise resolved
//      },function (result) {
//         console.log('Rej '+result); // Promise resolved
//     }
//   )
  
// let greet =function(b){
//     console.log('Hello '+ b)
//     }

//     greet('Bye')





// 'use strict';

// const regex = new RegExp(/^a...s$/);
// console.log(regex.test('alias')); // true

// const regularExp =/ac....t/;
// console.log(regularExp.test('account')) 

// let n=2
// function table(n){
//     for(let i=1; i<=10; i++){
//         let res=(i*n)
//          console.log(res);
//     }
// }
// table(2)

// i=[1,2,3,4,5,6,7,8,9,10]

// // console.log(indexOf)

//  for(let j of i){
//     let n=2
//     console.log(`${n} * ${j} =`,(j*2))
//  }


// What's the output?
// let fs = require('fs');

// console.log('1');

// fs.readFile('test.txt', 'utf8', function(error, data) {
// if (error) {
// throw error;
// }

// console.log('2');
// });

// console.log('3');
// console.log(5)
// for(var i=0;i<4;i++){
//     // console.log(i)
//     setTimeout(()=>{
//     console.log(i)
//     },1000)
// }
// console.log(7)


// function countdown(task){
//     console.log('Hello Kams ',task)
//     const newTask = task-1
//     if(newTask>0){
//     countdown(newTask);
//     }
// }
// countdown(3)



// program to find the factorial of a number
// function factorial(x) {

//     // if number is 0
//     if (x === 0) {
//         return 1;
//     }

//     // if number is positive
//     else {
//         return x * factorial(x - 1);
//     }
// }

// const num = 4;

// // calling factorial() if num is non-negative
// if (num > 0) {
//     let result = factorial(num);
//     console.log(`The factorial of ${num} is ${result}`);
// }


// class humans{
//     constructor(hands, legs, eye_color,Hair){
//         this.hands=hands
//         this.legs=legs
//         this.eye_color=eye_color
//         this.hair=Hair
//     }
//     // printD(){
//     //     console.log(`Humans have ${this.hands} hands, ${2} legs, ${this.eye_color} eyes, ${this.hair} hair`)
//     // }
// }

// humanN= new humans(2,2,'Blue','Black')
// console.log(humanN.hair)

// function person(h,l,e,ha){
//     this.hands=h
//     this.legs=l
//     this.eye_color=e
//     this.hair=ha    
// }
// personN = new person(1,2,3,4)
// console.log(personN)

// const arr = [10, 20, 30, 40]

// function array_sum(my_array) {
//     console.log(my_array)
//      if (my_array.length === 1) {
//           return my_array[0];
//            } 
//           else { 
//               return my_array.pop() + array_sum(my_array);
//             }
// };

// console.log(array_sum(arr))

// let a= 'hello'

// console.log(a[1])


// https://github.com/mekams/JS-Challanger.git


// program to implement stack data structure
// class Stack {
//     constructor() {
//         this.items = [];
//     }
    
//     // add element to the stack
//     add(element) {
//         return this.items.push(element);
//     }
    
//     // remove element from the stack
//     remove() {
//         if(this.items.length > 0) {
//             return this.items.pop();
//         }
//     }
    
//     // view the last element
//     peek() {
//         return this.items[this.items.length - 1];
//     }
    
//     // check if the stack is empty
//     isEmpty(){
//        return this.items.length == 0;
//     }
   
//     // the size of the stack
//     size(){
//         return this.items.length;
//     }
 
//     // empty the stack
//     clear(){
//         this.items = [];
//     }
// }

// let stack = new Stack();
// stack.add(1);
// stack.add(2);
// stack.add(4);
// stack.add(8);
// console.log(stack.items);

// stack.remove();
// console.log(stack.items);

// console.log(stack.peek());

// console.log(stack.isEmpty());

// console.log(stack.size());

// stack.clear();
// console.log(stack.items);



// function sum(n){
//     if(n<=1){
//         return n;
//     }
//     else{
//         let result =n+ sum(n-1)
//         return result;
//     }
// }

// n=-6
// if(n>0){

//     console.log(sum(n))
// }
// else{
//     console.log(sum(n))
// }

// // function myFunction(a, b){
// // let c = (b*a)/100
// // return  (c)
// // }

// // let t=myFunction(10,1)
// // console.log(t)
// // Object.keys


// // let person={
// //     continent: 1,
// //     country: 2
// // }

// // function my(obj,key){
// //     return obj[key]
// // }

// // person.age=3
// // console.log(person)

// function hey(a){
//     return {key : a}
// }
// console.log(hey('Hello'))



// program to implement stack data structure
// class Stack {
//     constructor() {
//         this.items = [];
//     }
    
//     // add element to the stack
//     add(element) {
//         return this.items.push(element);
//     }
    
//     // remove element from the stack
//     remove() {
//         if(this.items.length > 0) {
//             return this.items.pop();
//         }
//     }
    
//     // view the last element
//     peek() {
//         return this.items[this.items.length - 1];
//     }
    
//     // check if the stack is empty
//     isEmpty(){
//        return this.items.length == 0;
//     }
   
//     // the size of the stack
//     size(){
//         return this.items.length;
//     }
 
//     // empty the stack
//     clear(){
//         this.items = [];
//     }
// }

// let stack = new Stack();
// stack.add(1);
// stack.add(2);
// stack.add(4);
// stack.add(8);
// console.log(stack.items);

// stack.remove();
// console.log(stack.items);

// console.log(stack.peek());

// console.log(stack.isEmpty());

// console.log(stack.size());

// stack.clear();
// console.log(stack.items);


// let arr =   [8,2,7,5,1,4,0]
// let i,j,index,temp
// let n = arr.length
// // function bubbleS(list){
//     let i,j;
//     for(i=0; i<list.length; i++){
//         for(j=0; j<list.length-i-1; j++){
//             if(list[j]>list[j+1]){
//                 let temp = list[j]
//                     list[j]=list[j+1]
//                     list[j+1]=temp
//             }
//         }
//     }
//     console.log(list)
// }

// bubbleS(arr)


// function selectionS(list){
//     for (i=0; i<n-1; i++){
//         index = i
//         for(j=i+1; j< n; j++){
//             if(list[j]<list[index]){
//                 index = j
//             }
//         }
//         temp = list[index]
//         list[index] =list[i]
//         list[i] = temp
//     }
//     console.log(list)
// }

// selectionS(arr)


// const arr = [10, 20, 30, 40]

// function recurse(arr){
//     while(arr.length===1){
//         return arr[0]
//     }
//         return arr.pop() +recurse(arr)
//     }

// console.log(recurse(arr))


// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r)
{
 var n1 = m - l + 1;
 var n2 = r - m;

 // Create temp arrays
 var L = new Array(n1);
 var R = new Array(n2);

 // Copy data to temp arrays L[] and R[]
 for (var i = 0; i < n1; i++)
  L[i] = arr[l + i];
 for (var j = 0; j < n2; j++)
  R[j] = arr[m + 1 + j];

 // Merge the temp arrays back into arr[l..r]

 // Initial index of first subarray
 var i = 0;

 // Initial index of second subarray
 var j = 0;

 // Initial index of merged subarray
 var k = l;

 while (i < n1 && j < n2) {
  if (L[i] <= R[j]) {
   arr[k] = L[i];
   i++;
  }
  else {
   arr[k] = R[j];
   j++;
  }
  k++;
 }

 // Copy the remaining elements of
 // L[], if there are any
 while (i < n1) {
  arr[k] = L[i];
  i++;
  k++;
 }

 // Copy the remaining elements of
 // R[], if there are any
 while (j < n2) {
  arr[k] = R[j];
  j++;
  k++;
 }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr,l, r){
 if(l>=r){
  return;//returns recursively
 }
 var m =parseInt((r+l)/2);
 mergeSort(arr,l,m);
 mergeSort(arr,m+1,r);
 merge(arr,l,m,r);
}

// function printArray( A, size)        // Function to print an array
// {
//  for (var i = 0; i < size; i++)
//  console.log( A[i] + " ");
// }


var arr = [ 12, 11, 13, 5, 6, 7 ];
mergeSort(arr,0,arr.length-1)
console.log(arr) 

