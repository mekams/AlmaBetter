var myNums = [1, 2, 3, 4, 5];

function doubleNum(num) {
  return num * 2;
}

// Built-in Array.prototype.map function, using anonymous function argument
var doubledNums = myNums.map(function(num) {
  return num * 2;
});
console.log(doubledNums);           // logs "[2, 4, 6, 8, 10]"

// Built-in Array.prototype.map function, using named callback argument
var otherDoubledNums = myNums.map(doubleNum);
console.log(otherDoubledNums);      // logs "[2, 4, 6, 8, 10]"