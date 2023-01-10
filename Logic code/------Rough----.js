// function bS(arr, val, s, e){
//     if(s>e){
//         return
//     }
//     let m = Math.floor((s+e)/2);

//     if(arr[m]===val){
//         return m
//     }
    
//     if(arr[m]>val){
//         return bS(arr, val, s, m-1)
//     }
//     else{
//         return bS(arr,val, m+1, e)
//     }
// }

// const arr= [1, 2, 3, 4, 5,60]
// let pos =(bS(arr,3,0,arr.length-1))

// if(pos>=0){
//     console.log(`The element found at index ${pos}`)
// }else{
//     console.log(`Not found`)
// }




// let recursiveFunction = function (arr, x, start, end) {
	
// 	// Base Condition
// 	if (start > end) return false;

// 	// Find the middle index
// 	let mid=Math.floor((start + end)/2);

// 	// Compare mid with given key x
// 	if (arr[mid]===x) return mid;
		
// 	// If element at mid is greater than x,
// 	// search in the left half of mid
// 	if(arr[mid] > x)
// 		return recursiveFunction(arr, x, start, mid-1);
// 	else

// 		// If element at mid is smaller than x,
// 		// search in the right half of mid
// 		return recursiveFunction(arr, x, mid+1, end);
// }

// // Driver code
// let arr = [1, 3, 5, 7, 8, 9];
// let x = 1;

// console.log(recursiveFunction(arr, x, 0, arr.length-1))

// function reverse (a){
//     let NewArr  =[ ]
//     for(let i=arr.length-1; i>=0; i--){
//        console.log(NewArr.push(arr[i]))
//     }
//     return NewArr
// }

// let arr =[1,2,3,4]
// reverse(arr)
// // reverse(arr)


// let a=[27,28,30]
// let b=[99,16,8]

// function triplets(a,b){
//     let i=0, j=0;
//     let alice=0, bob=0
//     while(i <a.length && j< b.length ){
//         if(a[i]>b[j]){
//              alice+=1
//              i++
//              j++
//         }else if(a[i]<b[j]){
//             bob+=1
//             i++
//             j++
//         }else{
//             i++
//             j++
//         }
//     }
//     return [alice,bob]
// }
// console.log(triplets(a,b))


// const executorFunction = (resolve, reject) => {
//     if (x==0) {
//         resolve('I resolved!');
//     } else {
//         reject('I rejected!');
//     }
//   }
//   const myFirstPromise = new Promise(executorFunction);

// console.log(myFirstPromise)


let str = 'flexiple';
let str2 = str.charAt(0).toUpperCase()+ str.slice(1);
console.log(str2);

//Output: Flexiple
// str = 'abc efg';
// str2 = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(str2);