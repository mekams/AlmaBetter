var _ = require('lodash');
var numbers = [1, 2, 3, 4];
var listOfNumbers = '';
_.each(numbers, function(x) { listOfNumbers += x + ' ' });
console.log(listOfNumbers);


let lodash =require('lodash')
var	person = [
	{"firstName" : 'Marty'},
  	{"firstName" : 'Marty'},
    // {last_name : 'Marty'}
	// {born : 1968},
	// {died : 1933}
]
let res =lodash.every(person,["firstName",'Marty'])
console.log(res)