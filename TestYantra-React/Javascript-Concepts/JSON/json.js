const person = {
    name: "Yash",
    age: 38,
    color: "pink",
    hobbies: ["singing","acting","cricket"],
    address: {
        city: "Banglore",
        pincode: 560068
    },
    c: undefined,
    j: Math.max(10,20),
    add: function(){

    },
    d : new Date()

}
console.log("JS object ",person)
const jsonPerson = JSON.stringify(person)
console.log("JSON object ",jsonPerson)

const jsPerson = JSON.parse(jsonPerson)
console.log("JS object ", jsPerson)
