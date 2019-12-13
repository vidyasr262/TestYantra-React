let element = document.createElement("p")
console.log(element)

element.textContent = "Javascript is easy"
console.log(element)

document.body.appendChild(element)


//unordered list
const ulElement = document.createElement('ul')
ulElement.textContent = "Lipstick"

const li1Element = document.createElement('li')
li1Element.textContent = "Lakme"

const li2Element = document.createElement('li')
li2Element.textContent = "Loreal"

ulElement.appendChild(li1Element)
ulElement.appendChild(li2Element)

console.log(ulElement)

document.body.appendChild(ulElement)



// ordered list
const olElement = document.createElement('ol')
olElement.textContent = "Cars"

const li1Ele = document.createElement('li')
li1Ele.textContent = "BMW"

const li2Ele = document.createElement('li')
li2Ele.textContent = "Audi"

olElement.appendChild(li1Ele)
olElement.appendChild(li2Ele)

console.log(olElement)

document.body.appendChild(olElement)


//button

// const btn = document.createElement('button');
// btn.textContent = "click"
// let a = document.body.appendChild(btn);

// console.log(a)

// for(let i=0; i<10; i++){
//   btn[i];
//    console.log(a);

//  document.body.appendChild(btn)
// document.body.appendChild(btn);

   
   
// }


//Buttons
var arr = ['a','b','c','d','e','f','g','h','g','i'];
for(let i=0; i<10; i++){
let v = document.createElement('button');
v.textContent = arr[i];
document.body.appendChild(v)
  }
////////////////
  
  let items = `
            <ul>
                <li>A</li>
                <li>B</li>
            </ul>

             `
  let divElement = document.getElementById("test")
  divElement.innerHTML = items;


