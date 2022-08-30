const obj={
    firstName:'Kamran',
    lastName:'Mustafa',
    Place:'Delhi-NCR',
    Language:['English','Hindi']
}
for(let i in obj){
    console.log(`${i} => ${obj[i]}`)
}

console.log(`\n`,obj.Language)