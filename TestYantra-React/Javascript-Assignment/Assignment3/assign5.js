var distics = ["banglore", "hassan", "mysore", "mandya"]
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
var isDisticsArray = Array.isArray(distics);
console.log("Is Distics array ", isDisticsArray)

console.log("=============================")
var hasbidar = distics.includes("bidar", 0)
console.log("Has bidar ", hasbidar)

var indexHassan = distics.indexOf("hassan");
console.log("Index of hassan ", indexHassan)

console.log("=============")

var str = distics.join("***");
console.log("Join method: ", str)

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
var d = distics.slice(1,3)
console.log("distics after slice ", d)
console.log("distics after slice ", distics)


console.log("==================")








var fruits = ["Apple", "Orang", "Grapes", "Mango"];
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
var isfruitssArray = Array.isArray(fruits);
console.log("Is fruits array ", isfruitssArray)

console.log("=============================")
var has = fruits.includes("Apple", 0)
console.log("Has apple ", has)

var indexwatermilon = fruits.indexOf("watermilon");
console.log("Index of hassan ", indexwatermilon)

console.log("=============")

var str = fruits.join("+++++");
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
var f = fruits.slice(0,3)
console.log("fruits after slice ", f)
console.log("fruits after slice ", fruits)


console.log("==================")














