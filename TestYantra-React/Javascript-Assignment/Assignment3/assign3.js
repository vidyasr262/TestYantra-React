//for in loop for Array and object (gives value)
console.log("============For in loop ===================")
var fruits = ["Apple", "Orang", "Grapes", "Mango", "Kiwi"];
for (var index in fruits) {
    console.log("Index is ", index);
    console.log("Fruit ", fruits[index])
}


var distics = ["banglore", "hassan", "mysore", "mandya"];
for(var index in distics){
    console.log("Index is ", index);
    console.log("Distics "+ distics[index])
}


var EvenNum = [2,4,6,8,10];
for(var index in EvenNum){
    console.log("Index is ", index);
    console.log("Even numbers "+EvenNum[index])
}


var numbers = [10, 100, 1000, 10000];
for(var index in numbers){
    console.log("Index is ", index);
    console.log("numbers "+numbers[index])
}


var brands = ["Signature","Bisleri","Kinfisher","Kinley"];
for(var index in brands){
    console.log("Index is ", index);
    console.log("Brands "+ brands[index])
}

var hobbies = ["Football","Badminton","Cooking","Singing","Travelling"];
for(var index in hobbies){
    console.log("Index is ", index);
    console.log("Hobbies "+ hobbies[index]);

}

var cars = ["BMV", "Fiat", "audi", "Duster"];
for(var index in cars){
    console.log("Index is ", index);
    console.log("Cars "+ cars[index]);
}

var states = ["karnataka", "Kerala", "orissa", "Dehli"];
for(var index in states){
    console.log("Index is ", index);
    console.log("States ", states[index]);
}


console.log("==============for in objects=============")

var pen ={
    brand: "writo meter",
    color: "black",
    price: 20,
}
for (var key in pen){
    console.log("Key is ", key);
    console.log("Value is ", pen[key])
}


var bike ={ type:"Honda", color: "black", price: 100000}
for (var key in bike){
    console.log("Key is ", key);
    console.log("Value is ", bike[key])
}


var car = {type:"Fiat", model:"500", color:"white"};
for (var key in car){
    console.log("Key is ", key);
    console.log("Value is ", car[key])
}


var Girl = {
    name: "sanjana",
    nickname: "sanju",
    age: 20,
    married: false,
}
for (var key in Girl){
    console.log("Key is ", key);
    console.log("Value is ", Girl[key])
}


var Person = {
    firstName: "Ram",
    lastName: "chandan",
    Place: "Banglore",
    age: 30
}
for (var key in Person){
    console.log("Key is ", key);
    console.log("Value is ", Person[key])
}


var friend = {
    firstName: "sahana",
    lastName: "sonu",
    color: "white",
    age: 20
}
for (var key in friend){
    console.log("Key is ", key);
    console.log("Value is ", friend[key])
}