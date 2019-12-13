// "use strict"

const firstName = 'Bill'
const lastName = 'Gates'
console.log("First name ", firstName)
console.log("Last name ", lastName)
function display(){
    console.log("This is ", this)
    console.log("Display function")

}
display()

function showData(){
    // this is undefined in struct mode for functions
    //which is called like a normal function
    "use strict"
    console.log("This is ", this)
    // this.data = "Hello"
    console.log("Show data function ")
}
showData();
new showData();

