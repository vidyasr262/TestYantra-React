var fruits = ["apple", "mango", "orange", "butterfruit"];

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])

for(var i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

var person = ["Anu", 40, true, null, undefined];
for(var i=0; i<person.length; i++){
    console.log(person[i])
}


var num = 10;
var str = "10"
if (num === str){
    console.log("equal")
}else {
    console.log("not equal")
}