function mergeSort(array,left,right){
    if(left>=right){
        return
    }
    let mid =left+parseInt((right-left)/2)
    mergeSort(array,left,mid)
    mergeSort(array,mid+1,right)
    merging(array,left,mid,right)
}

function merging(array, left , mid ,right){
    let n1 = mid-left + 1
    let n2 = right-(mid+1)+1

    let L= new Array(n1)
    let R =new Array(n2)

    for(let i=0; i<n1; i++){
       L[i] = array[left + i]
    }
    for(let j=0;j<n2; j++){
        R[j]=array[mid+1+j]
    }


    let i=0;
    let j=0;
    let k=left;
    while(i<n1 && j<n2){
        if(L[i]<R[j]){
            array[k]=L[i]
            i++
        }else{
            array[k]=R[j]
            j++
        }
        k++
    }
    while(i<n1){
        array[k]=L[i]
        i++
        k++
    }
    while(j<n2){
        array[k] = R[j]
        j++
        k++
    }
}



let arr = [ 12, 11, 13, 5, 6, 7 ];
mergeSort(arr,0,(arr.length-1))

console.log(arr)