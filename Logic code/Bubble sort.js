function bubble_sort(arr){
    for(let i =0; i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j] > arr[j+1]){
                let temp =arr[j];
                arr[j]=arr[j+1];
                arr[j+1]= temp;
            }
        }
    }
    console.log(arr)
}   

let ar= [5,10,3,0,4]
let arr1= [4,6,1]
bubble_sort(arr1)