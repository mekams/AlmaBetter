// function swap(arr,xp, yp)
// {
//     let temp = arr[xp];
//     arr[xp] = arr[yp];
//     arr[yp] = temp;
// }
  
// function selectionSort(arr,  n)
// {
//     let i, j, min_idx;
  
//     // One by one move boundary of unsorted subarray
//     for (i = 0; i < n-1; i++)
//     {
//         // Find the minimum element in unsorted array
//         min_idx = i;
//         for (j = i + 1; j < n; j++)
//         if (arr[j] < arr[min_idx])
//             min_idx = j;
  
//         // Swap the found minimum element with the first element
//         swap(arr,min_idx, i);
//     }
//     console.log(arr)
// }
  
// let arr = [64, 25, 12, 22, 11];
// let n = 5;
// selectionSort(arr, n);


// function swapping(arr,x,y){
//     let temp    =   arr[x]
//         arr[x]  =   arr[y]
//         arr[y]  =   temp
// }

function selSort(arr){
    let i,j,index;
    for(i=0; i<(arr.length-1); i++){
        index=i;
        for(j=i+1; j< arr.length; j++){
            if(arr[j] < arr[index]){
            index   =   j;
            }
        }
        let temp    =   arr[index]
        arr[index]  =   arr[i]
        arr[i]  =   temp
        // swapping(arr,index,i)
    }
    console.log('The array is:',arr)
}

let arra =[9,6,5,1,3,4]

selSort(arra)