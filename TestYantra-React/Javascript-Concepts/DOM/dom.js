// let pElement = document.getElementById("demo");
// let pText = pElement.textContent
// console.log(pElement)
// console.log(pText)

// pElement.textContent = "Hi Everyone"
// console.log(pElement.textContent)

// console.log("===============")

// let testElement = document.querySelector(".test")
// console.log(testElement)
// console.log(testElement.textContent)

// let testElements = document.getElementsByClassName("test")
// console.log(testElements)
// for(let element of testElements){
//     if(element.textContent === "Facebook"){
//         element.textContent = "Instagram"
//     }
//     console.log(element.textContent)
// }

// // let text = document.getElementsByClassName("test")
// // let t = text[2].textContent = "Instagram";
// // console.log(t)

// var h2Elements = document.querySelectorAll("h2")
// console.log(h2Elements)

// for(let element of h2Elements){
//     if(element.textContent)
//     console.log(element.textContent)
// }

// for(let element of h2Elements){
//     let a = element.textContent;
//     let b = a.split(" ");
//     let c = b.join("-")
//     console.log("after", c);

// }




// let tagElement = document.getElementsByTagName("p")
// console.log(tagElement);
// for(let element of tagElement){
//     console.log(element.textContent)
// }

// let name = document.getElementsByName("user")
// console.log(name)
// for(let element of name){
//     console.log(element.textContent)
// }


// document.write("Good afternoon");



var myNodelist = document.querySelectorAll("p");
document.getElementById("demo").innerHTML =
    "The innerHTML of the second paragraph is: " +
    myNodelist[0].innerHTML;

console.log(myNodelist);

var myCollection = document.getElementsByTagName("p");
document.getElementById("demo1").innerHTML =
    "The innerHTML of the second paragraph is: " +
    myCollection[0].innerHTML;

console.log(myCollection);