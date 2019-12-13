//Array destructuring

const numbers = [100, 200, 300, 400]
let [num1, num2, num3] = numbers;

// console.log("Num0 ",num0)
console.log("Num1 ", num1)
console.log("Num2 ", num2)
console.log("Num3 ", num3)
    // console.log("Num4 ",num4)   // error not defined
    // console.log("Num5 ",num5)

const items = [{
        name: 'watch',
        brand: 'titan',
        price: 200
    }, {
        name: 'lipstick',
        brand: 'lakme',
        price: 300
    },
    {
        name: "mobile",
        brand: 'MI',
        price: 8000
    }

]

const [item1, item2] = items

console.log(item1.name)
console.log(item2)