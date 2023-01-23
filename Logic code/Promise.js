// let promise = new Promise(function(resolve, reject) {
//     reject('Promise')
//     })
    
//     promise.then(function(successMessage) {
//     console.log('Resolved '+successMessage);
//     }, function(errorMessage) {
//     //error handler function is invoked
//     console.log('Rejected '+errorMessage)
//     })


let promise = new Promise((resolve,reject)=>{           //predefined syntax
    console.log("promise is pending")
    setTimeout(()=>{
        reject("promise")                             //promise will be  rejected /resolved          
    },4000)
    })

    promise.then((value)=>{
        console.log("Resolved :",value)                //success
    },((error)=>{
        console.log(`Rejected :${error}`)               //catch error
    }))

//if sure error will come then line 27 to 29
    // promise.catch((error)=>{                            //specifically to catch errors
    //     console.log("Reject",error)                    // line 20 to 24 must be written if any doubt of errors
    // })
