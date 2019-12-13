//Named functions
console.log("======Factorial======")
function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
}
console.log("Named function: ", factorialize(2));


//Ananymous function or Function expression
var factorial = function (num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
}
var f = factorial(3);
console.log("Ananymous function: ", f);

//Self invoked functios or IIFE

(function (num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  console.log("Self invoked function: ", num)
  return num;
})(4);

//Arrow Function

var factorial = num => {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
}
var f = factorial(5);
console.log("Arrow Function: ", f);
