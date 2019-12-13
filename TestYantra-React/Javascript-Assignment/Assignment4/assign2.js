console.log("==========string============")

let exStr = "Please locate where 'locate' occurs!";
let index = exStr.indexOf("locate");
console.log("string index ", index)

let search = exStr.search("locate");
console.log("string ", search)

let sliceStr = exStr.slice(7, 13);
console.log("string slice ", sliceStr)

let substringStr = exStr.substring(1, 13);
console.log("string ", substringStr)


let substrString = exStr.substr(7, 6);
console.log("string ", substrString)

let replaceStr = exStr.replace("locate", "come");
console.log("string slice ", replaceStr)

let upper = exStr.toUpperCase();
console.log("string ", upper)

let lower = exStr.toLowerCase(); 
console.log("string ", lower)

let trimStr = exStr.trim();
console.log("string ", trimStr)

let charPos = exStr.charAt(3); 
console.log("string ", charPos)

let splitStr = exStr.split(""); 
console.log("string ", splitStr)


