// // Defining a function to display error message
// function printError(elemId, hintMsg) {
//     document.getElementById(elemId).innerHTML = hintMsg;
// }

//let center = document.createElement('center')
let table = document.createElement("table")
let thead = document.createElement("thead")
let reset = document.createElement("button")

let tr = document.createElement("tr")
let th1 = document.createElement("th")
let th2 = document.createElement("th")
let th3 = document.createElement("th")
let th4 = document.createElement("th")

th1.textContent = "Name"
th2.textContent = "Age"
th3.textContent = "Email"
th4.textContent = "Mobile"
reset.textContent = "Clear All"

//center.appendChild(table)
table.appendChild(thead)
thead.appendChild(tr)
tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)
tr.appendChild(th4)

addTable()

// Retrieving the values of form elements 
// let n = document.contactForm.name
// let a = document.contactForm.age
// let e = document.contactForm.email
// let m = document.contactForm.mobile

let userEle = document.forms['loginForm']['username']
let phoneEle = document.forms['loginForm']['phone']
let ageEle = document.forms['loginForm']['age']
let emailEle = document.forms['loginForm']['email']


    const input = document.getElementById('item');
    const input1 = document.getElementById('item1');
    const input2 = document.getElementById('item2');
    const input3 = document.getElementById('item3');

// Defining a function to validate form 
function validateForm() {
    const input = document.getElementById('item');
    const input1 = document.getElementById('item1');
    const input2 = document.getElementById('item2');
    const input3 = document.getElementById('item3');



    let name = userEle.value;
    let age = ageEle.value;
    let email = emailEle.value;
    let mobile = phoneEle.value;
    
let flag = 1;

    if (userEle.value.trim().length == " " || userEle.value.trim().length < 3) {
        let nEle = document.getElementById("test1")
        nEle.style.display = "block"
        flag = 1;
        return flag

    } else {
        let nEle = document.getElementById("test1")
        nEle.style.display = "none"
        flag = 0;
    }

    if (ageEle.value.trim() < 1 || ageEle.value.trim() > 140) {

        let aEle = document.getElementById("test2")
        aEle.style.display = "block"
        flag = 1;
        return flag

    } else {
        let aEle = document.getElementById("test2")
        aEle.style.display = "none"
        flag = 0;

    }

    var emailID = emailEle.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");


    if (atpos < 1 || (dotpos - atpos < 2)) {
        let eEle = document.getElementById("test3")
        eEle.style.display = "block"
        flag = 1;
        return flag

    } else {
        let eEle = document.getElementById("test3")
        eEle.style.display = "none"
        flag = 0;

    }

    if (phoneEle.value.trim().length !== 10) {
        let pEle = document.getElementById("test4")
        pEle.style.display = "block"
        flag = 1;
        return flag

    } else {
        let pEle = document.getElementById("test4")
        pEle.style.display = "none";
        flag = 0;

    }

    if (flag == 1) {
      return false ;
    }

    // // Prevent the form from being submitted if there are any errors
    // if ((nameErr || emailErr || mobileErr || ageErr) == true) {
    //     return false;
    // }

    let values = [name, age, email, mobile]
    addStorage(values)

};


function addTable() {
    for (let i = 0; i < localStorage.length; i++) {

        let value = localStorage.getItem(localStorage.key(i)).split(",")
            //console.log(value)
        if (value !== null && localStorage.key(i).startsWith("value")) {

            let tbody = document.createElement("tbody")
            let tr1 = document.createElement("tr")
            let td1 = document.createElement("td")
            let td2 = document.createElement("td")
            let td3 = document.createElement("td")
            let td4 = document.createElement("td")

            td1.textContent = value[0]
            td2.textContent = value[1]
            td3.textContent = value[2]
            td4.textContent = value[3]

            table.appendChild(tbody)
            tbody.appendChild(tr1)
            tr1.appendChild(td1)
            tr1.appendChild(td2)
            tr1.appendChild(td3)
            tr1.appendChild(td4)

            document.body.appendChild(table)
            // document.body.appendChild(reset)
        }
    }

}

function addStorage(values) {
    let i = localStorage.length + 1
    localStorage.setItem(`values${i}`, values)
}

const clear = document.getElementById("cl");
clear.addEventListener("click", function() {
    localStorage.clear()
    location.reload();
})


// const clear = document.getElementById("cl");
// clear.addEventListener('click', function () {
//     localStorage.clear();
//     ul.innerHTML = ""
//  values= [];
// })












