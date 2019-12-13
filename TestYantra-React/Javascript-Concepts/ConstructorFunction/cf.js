//Constrctor function

/* function Employee(name,age){
    this.ename = name;
    this.age = age;
    this.walk = function(){
        console.log("Walk Function executed ")
    }
    this.getName = function(){
        return this.ename
    }
}
const mark = new Employee('Mark Zukerbarg', 35)

console.log("Name is ", mark.ename)
console.log("Age is ", mark.age)
mark.walk()
let name = mark.getName()
console.log("Name is ",name) */




//without new keyword

function Employee(name, age) {
    console.log(this === window)  //this is equal wind
    this.ename = name;
    this.age = age;
    this.walk = function () {
        console.log("Walk Function executed ")
    }
    this.getName = function () {
        return this.ename
    }
}
const mark = Employee('Mark Zukerbarg', 35)

console.log("Name is ", this.ename)
console.log("Age is ", this.age)
this.walk()
let name = this.getName()
console.log("Name is ", name)



/////////////////


function Employee(name, age) {
    console.log(this === window)
    this.ename = name;
    this.age = age;
    this.walk = function () {
        console.log("Walk Function executed ")
    }
    this.getName = function () {
        //this equal to employee object
        console.log("This is employee object ", this)
    }
    function greet() {
        // this is the window object as it invoked by window object reference
        console.log("This is window object ", this)
    }
    //Arrow function
    getData = () => {
        //this is the parent context i.e. employee object
        console.log("This is employee object ", this)
        console.log("get data function ")
    }
    greet()
    getData()

    return this.ename
}
const mark = Employee('Mark Zukerbarg', 35)

console.log("Name is ", this.ename)
console.log("Age is ", this.age)
this.walk()
let name = this.getName()
console.log("Name is ", name)



