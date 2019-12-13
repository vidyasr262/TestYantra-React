//Spread operator
const numbers = [100, 200, 300]
console.log("Numbers ", numbers)

const copyOfNumber = [...numbers]
console.log("copy of numbers ", copyOfNumber)

numbers.push(500)
numbers.push("After push ", numbers)
numbers.push("After push copyOfNumber ", copyOfNumber)

//

const animals = ['lion', 'Tiger', 'cow', 'Dog']
const moreAnimals = ['Giraffe', 'Camel', 'Puma', 'humans']
const copyOfAnimals = [...animals, ...moreAnimals]

console.log("Copy of animals ", copyOfAnimals)


// Spread operator with object
const person = {
    name: 'Sundara',
    age: 23,
    height: 5.7,
    weight: 60
}

const copyOfPerson = { ...person }

person.name = "Sundari"
console.log("Person object ", person)
console.log("Copy of person object ", copyOfPerson)


const teacher = {
    name: 'Reena',
    age: 30,
    color: 'pink',
    subjects: ['social','english']
}

const address = {
    city: 'Benglore',
    pincode : 560068,
    landmark: 'BTM'
}
    
const teacherWithAddress = {...teacher, ...address}
console.log("Teacher with address ",teacherWithAddress)

const teacherWithPhone = {
    ...teacher,
    phoneno : 986768990,
    married: false,
    getName: function(){
        return this.name
    }
}

console.log("Teacher with phone no ", teacherWithPhone)