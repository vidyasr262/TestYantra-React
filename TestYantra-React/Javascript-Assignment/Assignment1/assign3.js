console.log("============11111========")
var carObj = new Object();
carObj.type = "Fiat"
carObj.model = 500
carObj,color = "white"
console.log("Type ", carObj.type)
console.log("Model ", carObj.model)
console.log("color ", carObj.color)


console.log("============22222========")
var Girl = new Object();
Girl.fistName = "Rachitha"
Girl.lastName = "Ram"
Girl.age = 29
Girl.color = "white"
console.log("Girl "+ Girl.fistName + " " + Girl.lastName + " " + Girl.color)


console.log("============33333========")
var Names = new Object();
Names.first = "Ram"
Names.second = "Sam"
Names.third = "Madhu"

console.log("Names "+Names.first, ",", Names.second, ",", Names.third)


console.log("============444444========")
var bike = new Object();
bike.type ="Honda"
bike.price = 100000
bike.color = "black"

console.log("Bike info-- ", bike.type, ",", bike.color, ",",bike.price)


console.log("============55555========")
var pen = new Object();
pen.brand = "writo meter"
pen.color ="balck"
pen.favoritepen = function(){
    return this.brand + " " + this.color;
}
console.log("Pen "+ pen.favoritepen());

console.log("============66666========")
var Even = new Object();
Even.first = 2
Even.second = 4
Even.third = 6

console.log("Even Numbers "+ Even.first, ",", Even.second, ",", Even.third)


console.log("============77777========")
var Emp = new Object();
Emp.name = "Ram"
Emp.id = 100
Emp.salary = 200000

console.log("Employee "+ Emp.name, ",", Emp.id, ",", Emp.salary)


console.log("============88888========")
var City = new Object();
City.name = "Banglore"
City.antherName = "silicon city"
City.popultion = "1 lack"

console.log("Employee "+ City.name, ",", City.antherName, ",", City.popultion)


console.log("============99999========")
var Emp = new Object();
Emp.emp1 = "Ram"
Emp.emp2 = "Chitra"
Emp.emp3 = "Vinay"

console.log("Employee "+ Emp.emp1, ",", Emp.emp2, ",", Emp.emp3)


console.log("============10========")
var Fruits = new Object();
Fruits.one = "banana"
Fruits.two = "apple"
Fruits.three = "orange"

console.log("Fruits "+ Fruits.one, ",", Fruits.two, ",", Fruits.three)
