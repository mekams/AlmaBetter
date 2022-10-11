function PlusMinus(arr) {
    let n = arr.length, i=0,j=0,k=0,l=0;
    while(i<n){                     //can also use for same
        if(arr[i]>0){                   //checking "+" number
            j++
            i++
        }
        else if(arr[i]<0){              //checking "-" number
            k++
            i++
        }
        else{                           //Checking number === 0 or !
            l++
            i++
        }
    }
    console.log((j/n).toFixed(6))       //up to 6 decimal places
    console.log((k/n).toFixed(6))
    console.log((l/n).toFixed(6))
}



let arr = [-4, 3, -9, 0, 4, 1]
// let arr = [1, 2, 3, -1, -2, -3, -4, -5, -6, 8, 9]
PlusMinus(arr)
// console.log(arr.length)