

// alert("This site may contain -------information")

// let result = confirm("Are you 18 years old")
// console.log("Result ",result)

// let name = prompt("Enter your name ", "xyz@gmail.com")
// console.log("name ",name)


var a = 10;
var b = 20;

function testWindow(){
    console.log("Testing window object")
}
console.log(window)
console.log(window.a)
console.log(this.a)
window.testWindow()
this.testWindow()
console.log(window===this)

