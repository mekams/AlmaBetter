let celebrity ={
    firstName:'Akshay',
    lastName: 'Kumar',
    combined :function(){                           /////Function 1
        let fullName =this.firstName + ' '+this.lastName;
        return fullName ;
    }
}

let bindFunction = function(){                      ////// Function 2
    console.log('Welcome to the party ' + this.combined())
} 

let show =bindFunction.bind(celebrity)              ////bind method

show()                                              ///display the output