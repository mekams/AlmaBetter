let obj={
    name : 'Kamran'
}

Object.freeze(obj)
obj.place='Delhi'
console.log(obj)

let obj2={
    ...obj,
    place:'Delhi'
}
console.log(obj2)

let res= Object.assign({},obj)
res.eyes='brown'
console.log(res)