function greet(){
    alert("Welcome to javascript")
}

let element = document.createElement("p")
function elementCreation(){
    // let element = document.createElement("p")
element.textContent = "Javascript"
console.log(element)

document.body.appendChild(element)
}


function showData(){
    const ele = document.getElementById("show");
    console.log(ele.textContent)
}