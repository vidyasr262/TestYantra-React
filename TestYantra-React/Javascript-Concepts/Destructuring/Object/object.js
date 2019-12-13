
//Object destructuring
const person = {
    name: "Raj",
    age: 80,
    weight: 60,
    hobbies: ['acting', 'singing']
}

const { hobbies } = person;
console.log('Hobbies ', hobbies)

function displayHobbies({ hobbies }) {
    for (let hobby of hobbies) {
        console.log(hobby.toUpperCase())
    }
}
displayHobbies(person);

