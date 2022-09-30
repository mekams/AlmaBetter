function swap(arr, index, i){   //swapping function to swap two numbers
    let temp    =   arr[index]
    arr[index]  =   arr[i]
    arr[i]      =   temp    
}

function selectionSort(arr){
    let i,j,index;
    for( i=0; i<arr.length-1; i++){
        index = i;
        for( j=i+1; j<arr.length; j++) //{
            if(arr[j] < arr[index])  //{
                index=j;
            //}
        //}
            swap(arr,index,i)
    }
    console.log(arr)
}

let arr1 =  [6,5,8,3,0,4,2,7,1];

selectionSort(arr1)



















// function selSort(arr){
//     let i,j,index;
//     for(i=0; i<(arr.length-1); i++){
//         index=i;
//         for(j=i+1; j< arr.length; j++){
//             if(arr[j] < arr[index]){
//             index   =   j;
//             }
//         }
//         let temp    =   arr[index]
//         arr[index]  =   arr[i]
//         arr[i]  =   temp
//         // swapping(arr,index,i)
//     }
//     console.log('The array is:',arr)
// }

// let arra =[9,6,5,1,3,4]

// selSort(arra)