let items = `
            <ul>
                <li>Book</li>
                <li>Pen</li>
                <li>Pencil</li>
            </ul>

             `
  let divElement = document.getElementById("test")
  divElement.innerHTML = items;
  //////////

  let order = `<ol><li>Mysore</li><li>Banglore</li><li>Hassan</li></ol>`
  let divEle = document.getElementById("test1")
  divEle.innerHTML = order;


//ordered list
const olEle = document.createElement('ol')
const li1Ele = document.createElement('li')
li1Ele.textContent = "Mysore"

const li2Ele = document.createElement('li')
li2Ele.textContent = "Banglore"

const li3Ele = document.createElement('li')
li3Ele.textContent = "Hassan"

olEle.appendChild(li1Ele)
olEle.appendChild(li2Ele)
olEle.appendChild(li3Ele)

console.log(olEle)

document.body.appendChild(olEle)
olEle.className = "order";

//unordered list
const ulEle = document.createElement('ul')
const li1Element = document.createElement('li')
li1Element.textContent = "Karnataka"

const li2Element = document.createElement('li')
li2Element.textContent = "Kerala"

const li3Element = document.createElement('li')
li3Element.textContent = "Andra pradesh"

ulEle.appendChild(li1Element)
ulEle.appendChild(li2Element)
ulEle.appendChild(li3Element)

console.log(ulEle)

document.body.appendChild(ulEle)
ulEle.className = "unorder";