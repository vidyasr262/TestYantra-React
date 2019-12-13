const form = document.querySelector('form');
  const ul = document.querySelector('ul');
//  const ul = document.querySelector('table');
const button = document.querySelector('button');
const input = document.getElementById('item');

const input1 = document.getElementById('item1');
const input2 = document.getElementById('item2');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));



const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);

}

// const liMaker = (text) => {
// //   const li = document.createElement('li');
// //   li.textContent = text;
// //   ul.appendChild(li);
// const li = document.createElement('tr');
// // const tr = document.createElement('tr')
// console.log("text : ",text);

// const td = document.createElement('td');

//   td.textContent = text;
//   li.appendChild(td)
//   ul.appendChild(li)

// //   ul.appendChild(tr);
  
// }


form.addEventListener('submit', function (e) {
  
  e.preventDefault();

  itemsArray.push(input.value);
  itemsArray.push(input1.value);
  itemsArray.push(input2.value);

  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";

  liMaker(input1.value);
  input1.value = "";

  liMaker(input2.value);
  input2.value = "";
});

console.log("itemsArray : ", itemsArray)
data.forEach((item) => {
    console.log("item : ",item)
  liMaker(item);
});

const clear = document.getElementById("cl");
clear.addEventListener('click', function(){
    localStorage.clear();
    ul.innerHTML = ""
    itemsArray = [];
})



///////////////////////////////  end///////////////////////




// button.addEventListener('click', function () {
//   localStorage.clear();
//   while (ul.firstChild) {
//     ul.removeChild(ul.firstChild);
//   }
//   itemsArray = [];
// });



// const form = document.querySelector('form');
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
// const input = document.getElementById('item');
// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// localStorage.setItem('items', JSON.stringify(itemsArray));
// const data = JSON.parse(localStorage.getItem('items'));

// const liMaker = (text) => {
//   const li = document.createElement('li');
//   li.textContent = text;
//   ul.appendChild(li);
// }

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   itemsArray.push(input.value);
//   localStorage.setItem('items', JSON.stringify(itemsArray));
//   liMaker(input.value);
//   input.value = "";
// });

// data.forEach(item => {
//   liMaker(item);
// });

// button.addEventListener('click', function () {
//   localStorage.clear();
//   while (ul.firstChild) {
//     ul.removeChild(ul.firstChild);
//   }
//   itemsArray = [];
// });

function isAutomorphic(n) {
	let square = Math.pow(n, 2).toString();
	n = n.toString();
	return n == square.slice(square.length - n.length)
}

function isAutomorphic(n) {
	let square = (n * n).toString();
	return n.toString() === square.slice(-n.toString().length);
}
console.log(isAutomorphic(6))