// function insertionSort(arr,n){
//     let i, j,key;
//     for(i=1;i<n;i++){
//         key=arr[i]
//         j=i-1;
        
//         while(j>=0 && arr[j]>key){
//             arr[j+1]=arr[j];
//             j--;
//         }
//         arr[j+1]=key;
//     }
//     console.log(arr)
// }
// let arr =[7,5,3,1,9,10]
// let n= arr.length;
// insertionSort(arr,n)


let key,i,j;                            //Declared variables
function insertS(arr){                  //function
    for(i=1;i<arr.length;i++){          //assume arr[0] / i=0 already sorted
        key =   arr[i]                  
        j   =   i-1
        while(j>=0 && arr[j]>key){          //condition for comparing two elements
            arr[j+1]=arr[j]
            j-=1
        }
        arr[j+1]=key
    }
    return arr                          //returned function
}

let array_unsorted =[7,8,5,2,9,1]

console.log(insertS(array_unsorted))