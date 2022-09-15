function range(x , y){
    if(y-x===2){
        return [x+1]        //base condition
    }
    else{
        let list =range(x,y-1)  // recursion 
        list.push(y-1)
        return list             //range is returning
    }
}

function call_back_range(x,y){
    let arr= [x,range(x,y),y]
    return arr
}


console.log(call_back_range(1,5))