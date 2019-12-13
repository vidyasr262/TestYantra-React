var fruits = ["Apple", "Orang", "Grapes", "Mango", "Kiwi"];
for (var i = 0; i < fruits.length; i++) {
    console.log("Fruits ", fruits[i])
}

//for of loop for Array (gives value)
for (var fruit of fruits) {
    console.log("Using for of ", fruit)
}

//for in loop for Array(gives index)
for (var index in fruits){
    console.log("Index is ", index);
    console.log("Fruit ", fruits[index])
}

//for in loop for Object(gives key)
var person = {
    name : 'Priyanka',
    college: 'APS',
    hasBf: false
}

for (var key in person){
    console.log("Key is ", key);
    console.log("Value is ", person[key])
}

//forEach method for Array
fruits.forEach(function(value,index){
    console.log("Index is ", index)
    console.log("Value is ", value)
})