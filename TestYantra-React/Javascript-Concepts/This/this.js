

//Global this
console.log("This is window object ", this)

//Arrow function
display = () => {
    //this is parent context i.e. window object
    console.log("this is window object ", this)
}

//Named function
function show() {
    //this is window object as it is invoked by window object
    console.log("this is window object ", this)
}


display()
show()


const person = {
    firstName: 'Katrina',
    lastName: 'kaif',
    color: 'white',
    getFullName: function () {
        //this is person object as it is invoked by person
        //object reference
        console.log("This is person object ", this)
    },
    getColor: function () {
        console.log("This is person object ", this)
        getData = () => {
            //this is parent context i.e. person object

            console.log("This is person object ", this)

        }

        function showData() {
            //this is window object as it is invoked
            //by window reference
            console.log("This is person object ", this)

        }
        getData()
        showData()

    }
}

console.log("=========================")

// Constructor function
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
    }
    greet()
    getData()

    return this.ename
}
const mark = new Employee('Mark Zukerbarg', 35)

console.log("Name is ", mark.ename)
console.log("Age is ", mark.age)
mark.walk()
let name = mark.getName()
console.log("Name is ", name)




// function Employee(name, age) {
//     console.log(this === window)
//     this.ename = name;
//     this.age = age;
//     this.walk = function () {
//         console.log("Walk Function executed ")
//     }
//     this.getName = function () {
//         //this equal to employee object
//         console.log("This is employee object ", this)
//     }
//     function greet() {
//         // this is the window object as it invoked by window object reference
//         console.log("This is window object ", this)
//     }
//     //Arrow function
//     getData = () => {
//         //this is the parent context i.e. employee object
//         console.log("This is employee object ", this)
//         console.log("get data function ")
//     }
//     greet()
//     getData()

//     return this.ename
// }
// const mark = Employee('Mark Zukerbarg', 35)

// console.log("Name is ", this.ename)
// console.log("Age is ", this.age)
// this.walk()
// let name = this.getName()
// console.log("Name is ", name)