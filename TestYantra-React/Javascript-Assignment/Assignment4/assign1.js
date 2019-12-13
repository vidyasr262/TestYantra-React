let distics = ["banglore", "hassan", "mysore", "mandya"]
distics.push("udupi","manglore")
console.log("distics after push ", distics)

console.log("===============")
distics.pop()
console.log("Distics after pop ", distics)

console.log("===============")
distics.unshift("Raichur")
console.log("Distics after unshift ", distics)

console.log("===============")
distics.shift()
console.log("Distics after shift ", distics)

console.log("=============")
let isDisticsArray = Array.isArray(distics);
console.log("Is Distics array ", isDisticsArray)

console.log("=============================")
let hasbidar = distics.includes("bidar", 0)
console.log("Has bidar ", hasbidar)

let indexHassan = distics.indexOf("hassan");
console.log("Index of hassan ", indexHassan)

console.log("=============")

let strJoin = distics.join("***");
console.log("Join method: ", strJoin)

console.log("=============")


distics.splice()
// brands.splice(1,1,"Ibbani")
console.log("distics after splice ", distics)

console.log("==================")

distics.splice(1,2, "gulbarga")
// brands.splice(1,1,"Ibbani")
console.log("distics after splice ", distics)

console.log("==================")


console.log("==================")
let d = distics.slice(1,3)
console.log("distics after slice ", d)
console.log("distics after slice ", distics)


console.log("==================")








let fruits = ["Apple", "Orang", "Grapes", "Mango"];
fruits.push("Kiwi")
console.log("fruits after push ", fruits)

console.log("===============")
fruits.pop()
console.log("fruits after pop ", fruits)

console.log("===============")
fruits.unshift("banana")
console.log("fruits after unshift ", fruits)

console.log("===============")
fruits.shift()
console.log("fruits after shift ", fruits)

console.log("=============")
let isfruitssArray = Array.isArray(fruits);
console.log("Is fruits array ", isfruitssArray)

console.log("=============================")
let has = fruits.includes("Apple", 0)
console.log("Has apple ", has)

let indexwatermilon = fruits.indexOf("watermilon");
console.log("Index of hassan ", indexwatermilon)

console.log("=============")

let str = fruits.join("+++++");
console.log("Join method: ", str)

console.log("=============")


fruits.splice()
// brands.splice(1,1,"Ibbani")
console.log("fruits after splice ", fruits)

console.log("==================")

fruits.splice(1,0, "")
// brands.splice(1,1,"Ibbani")
console.log("fruits after splice ", fruits)

console.log("==================")


console.log("==================")
let f = fruits.slice(0,3)
console.log("fruits after slice ", f)
console.log("fruits after slice ", fruits)


console.log("==================")



let sorting = fruits.sort()
console.log("fruits after sort ", sorting)
console.log("fruits after sort ", fruits)

let numbers = [2,3,4]
let redc = numbers.reduce((total, val) => {

    return total + val;
})
console.log("Reduce no. ", numbers)
console.log("Reduce after ", redc)









