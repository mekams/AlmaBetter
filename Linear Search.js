function linearSearch(arr,value){   
    let index = 0;                      //initialise
    let found = false;                  
    while(index<arr.length){
        if(arr[index]===value){
            found =true;
            console.log(`Found at index ${index}`)
            break;
        }
        index++;
    }
    return found;
}

let arr =[9,7,6,3,2,0]
let flag =linearSearch(arr,2)
if(flag===false){
    console.log(`Element not found`)
}