function bS(arr, val, s, e){  //s= starting index, e= ending index, val= value , m=mid
    if(s>e){
        return
    }
    let m = Math.floor((s+e)/2);

    if(arr[m]===val){
        return m
    }
    
    if(arr[m]>val){
        return bS(arr, val, s, m-1)
    }
    else{
        return bS(arr,val, m+1, e)
    }
}

const arr= [1, 2, 3, 4, 5,60]
let pos =(bS(arr,3,0,arr.length-1))

if(pos>=0){
    console.log(`The element found at index ${pos}`)
}else{
    console.log(`Not found`)
}





// note that list must be sorted for this function to work
function binarySearch(value, list) {
    let low = 0;    //left endpoint
    let high = list.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let mid;
  
    while (found === false && low <= high) {
        mid = Math.floor((low + high)/2);
        if (list[mid] == value) {
            found = true;
            position = mid;
        } else if (list[mid] > value) {  //if in lower half
            high = mid - 1;
        } else {  //in in upper half
            low = mid + 1;
        }
    }
    return position;
}

const arr1 = [55, 88, 99,101,120]

console.log(binarySearch(81, arr1))