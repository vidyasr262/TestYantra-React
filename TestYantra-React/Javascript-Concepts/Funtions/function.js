//Named functions

function add(a, b){
    var sum = a + b;
    console.log("sum is ",sum)
}
add(2,5);

function check(n){
    console.log("N value is ", n)
}
check()

function test(){
    console.log("test method")
}
test(9)

function multiply(n1,n2){
    return n1*n2;
}
var mul = multiply(2,4)
console.log("Product ",mul)


//Ananymous function or Function expression
var division = function (x,y){
    return x/y;
}
var d = division(2,5)
console.log("Division ", d);

//Self invoked functios or IIFE
(function(p,q){
    console.log("Value is ",p-q);
})(20,10);


//Arrow Function
// var addition = (a,b,c) => {
//     return a+b+c;
// }

var addition = (a,b,c) => a+b+c;

var x = addition(1,2,3);
console.log("Sum is ", x)

var sqr = (a)=> a*a
var s = sqr(10);
console.log("Squre of number ", s)

var sqr = a=> a*a

console.log("Squre of number ", sqr(1))

































































































































































































































































































































































