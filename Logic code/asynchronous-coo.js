// function download(url,cb){
//     setTimeout(()=> {
//         console.log("Movie is downloaded");
//         cb(url);
//     },3000)
// }

const { get } = require("lodash");


// function upload(){
//     console.log("Movie uploaded")
// }

// download("url",upload);


// let exeF = (resolve ,reject) => {
//     let action= "";                //""--> false action (reject) / " " or "xyz" --> true action (resolve)
//     if(action){
//         resolve("Success")
//     }else{
//         reject("Failed")
//     }
// }

// let mypromise =   new Promise(exeF)

// mypromise.then((message)   =>  {
//     console.log("Dry clothes:",message)
// }).catch((message) =>  {
//     console.log("Wash again:",message)
// })

let movies =[
    {title:"M1",
    year:"2019"
    },
    {title:"M2",
    year:"2022"
    }   
]

function addMovies(movie){
    return new Promise((resolve,reject) => {
        setTimeout(()   =>  {
            movies.push(movie);
            error = "";
            if(!error){
                resolve();
            }else{
                reject("Error encountered")
            }
        },2000)
    });
}

function getmovies(){
    setTimeout(()   =>  {
        movies.forEach((movie) =>    {
            console.log(movie.title,movie.year)
        })
    },1000)
}

async function init(){
    await addMovies({title:"M3",year:"2023"})
    getmovies()
}

init()