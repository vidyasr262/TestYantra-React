//var keyword

//Global scope variables
var a = 10;

function check() {
    //local scope variable
    var b = 20;
    console.log("value is b is ", b)
}
check();

for(i=0; i<5; i++){

}
console.log("i value is ",i)

//let keyword

//Global scope


let x = 10;
// let x = 20; // no redlaration
x =30; //Reassigning is possible

function test(){
    let y = 10;
    console.log("value of  y ",y)
}
test()

for(let j=0; j<5; j++){
    // block scope
    console.log(j);
}

//const keyword

//Global scope
//const p; // only declaration not possible

const p = 10;
// const p = 20 //no reclaration
// p = 20; //no reassigning

const items = ['watch','shoe','chacolates','mobiles']
items.push('laptops')
console.log(items)



const person = {
    name: 'smriti mandana'
}
console.log("person ",person)

/* no reassignment
const person = {
    name: 'smriti mandana'
} */

person.name = "alia bhat";
console.log(person)