let promise = new Promise(function(resolve, reject) {
    reject('Promise')
    })
    
    promise.then(function(successMessage) {
    console.log('Resolved '+successMessage);
    }, function(errorMessage) {
    //error handler function is invoked
    console.log('Rejected '+errorMessage)
    })