const c = document.getElementById("create");
const h = document.getElementById("home");
const s = document.getElementById("show");


const row2 = document.getElementById("form");
const row1 = document.getElementById("img");
const row3 = document.getElementById("tab");

c.addEventListener('click', function () {
        row2.style.display = "block"
        row1.style.display = "none"
        row3.style.display = "none"


})

s.addEventListener('click', function () {
        row3.style.display = "block"
        row1.style.display = "none"
        row2.style.display = "none"


})

h.addEventListener('click', function () {
        row3.style.display = "none"
        row2.style.display = "none"

        row1.style.display = "block"

})

//Show password
function myFunction() {
        var x = document.getElementById("i3");
        if (x.type === "password") {
                x.type = "text";
        } else {
                x.type = "password";
        }
}




var flag = 0;

const form = document.querySelector('form');
const ul = document.querySelector('#list');
//  const ul = document.querySelector('table');
// const button = document.querySelector('button');
// const input = document.getElementById('item');

const ip1 = document.getElementById('i1');
const ip2 = document.getElementById('i2');
const ip3 = document.getElementById('i3');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));



let user = document.forms['createFrm']['username']
let phn = document.forms['createFrm']['phone']
let pass = document.forms['createFrm']['password']


const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);

}


function createAccount() {

//     const input = document.getElementById('item');

//     const input1 = document.getElementById('item1');
//     const input2 = document.getElementById('item2');
//     const input3 = document.getElementById('item3');
    checkForm();
    console.log("flag : ",flag)
    
    if(flag == 1){
        return;
    }

    itemsArray.push(ip1.value);
    itemsArray.push(ip1.value);
    itemsArray.push(ip2.value);
    

    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(ip1.value);
    ip1.value = "";

    liMaker(ip2.value);
    ip2.value = "";

    liMaker(ip3.value);
    ip3.value = "";
}


console.log("itemsArray : ", itemsArray)
data.forEach((ip1) => {
    console.log("item : ", ip1)
    liMaker(ip1);
});

const clear = document.getElementById("cl");
clear.addEventListener('click', function () {
    localStorage.clear();
    ul.innerHTML = ""
    itemsArray = [];
})


function checkForm() {

        if (user.value.trim().length == " " || user.value.trim().length < 3) {
                let user1 = document.getElementById("item")
                user1.style.display = "block"
                flag = 1;
                return flag

        } else {
                let user1 = document.getElementById("item")
                user1.style.display = "none"
                flag = 0;
                
        }

        if (phn.value.trim().length !== 10 ) {
                let phn1 = document.getElementById("item1")
                phn1.style.display = "block"
                flag = 1;
                return flag
        } else {
                let phn1 = document.getElementById("item1")
                phn1.style.display = "none"
                flag = 0;
                
        }

        if (pass.value.trim() < 1 || pass.value.trim() > 10) {
                let pass1 = document.getElementById("item2")
                pass1.style.display = "block"
                flag = 1;
                return flag
        } else {
                let pass1 = document.getElementById("item2")
                pass1.style.display = "none"
                flag = 0;

        }

       

    // if (flag === 0) {
    //     alert("Success submitted")
        
      return flag
    //   document.forms['loginForm'].reset();

    //   return flag
        
    // } else {
    //     return false
    // }

    if (flag === 0) {
        // alert("Success submitted")
        
     return flag
    //   document.forms['loginForm'].reset();

    // return flag
        
    } else {
        return flag;
    }

}

