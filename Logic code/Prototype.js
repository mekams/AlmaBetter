function person(first, last){
	this.firstName = first;
	this.lastName = last;
	// this.age = age;
	// this.eyeColor = eyecolor;
}
person.prototype.nationality = "Indian";

person.prototype.name = function() {
	return this.firstName + ' '+ this.lastName
};

let p1 =new person('K','M')
// let p2 = new person()

console.log(p1.name('K','M'))
console.log(p1.nationality)
console.log(p1.firstName)