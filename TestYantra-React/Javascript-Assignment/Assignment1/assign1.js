var car = { type: "Fiat", model: "500", color: "white" };

console.log("Type ", car.type)
console.log("Model ", car.model)
console.log("color ", car.color)
console.log("==========111============")

var Girl = {
    name: "sanjana",
    nickname: "sanju",
    age: 20,
    married: false,
    getInfo: function () {
        return this.name + " " + this.age + " years old " + this.married;
    }
}
console.log("Name " + Girl.name)
console.log("Full Info " + Girl.getInfo())
console.log("Name " + Girl.married)

console.log("============22222========")

var Names = { first: "Ram", second: "Sam", third: "Madhu", fourth: "Mohan" };
console.log("Names " + Names.first, ",", Names.second, ",", Names.third)

console.log("========333===========")

var bike = { type: "Honda", color: "black", price: 100000 }
console.log("Bike info-- ", bike.type, ",", bike.color, ",", bike.price)

console.log("==========4444===========")

var pen = {
    brand: "writo meter",
    color: "black",
    price: 20,
    favoritepen: function () {
        return this.brand + " " + this.color;
    }
}

console.log("Pen " + pen.favoritepen());

console.log("=========5555===========")

var Person = {
    firstName: "Ram",
    lastName: "chandan",
    Place: "Banglore",
    age: 30
}
console.log("Person info " + Person.firstName + " " + Person.lastName + " " + Person.Place + " " + Person.age)

console.log("=========66666===========")

var girlNames = { first: "sahana", second: "Sanjana", third: "Sandya", fourth: "saakshi" }
console.log("Names " + girlNames.first, ",", girlNames.second, ",", girlNames.third)

console.log("=========8888===========")

var friend = {
    firstName: "sahana",
    lastName: "sonu",
    color: "white",
    age: 20
}
console.log("Person info " + friend.firstName + " " + friend.lastName + " " + friend.color + " " + friend.age)

console.log("=========99999===========")