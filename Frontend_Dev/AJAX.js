// Install the module using "npm install xhr2"
// let XMLHttpRequest = require('xhr2')            //line 2 is not  required when doing ijn live server /chrome

// function show is created
function listener(){
    console.log(this.responseText);
}

// instantiate the object XHR
let req = new XMLHttpRequest();
req.addEventListener("load", listener);

// open the request
req.open("GET" , "https://jsonplaceholder.typicode.com/posts",false)
// req.open("GET" , "https://www.google.com/search?q=testbook")


// send the request
req.send()
