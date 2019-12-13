let register = document.getElementById("reg")

// let table = document.querySelector("table")
// let thead = document.createElement("thead")
// let tbody = document.createElement("tbody")

// let tr = document.createElement("tr")
// let th1 = document.createElement("th")
// let th2 = document.createElement("th")
// let th3 = document.createElement("th")
// let th4 = document.createElement("th")

// th1.textContent = "Name"
// th2.textContent = "Age"
// th3.textContent = "Email"
// th4.textContent = "Mobile"


// //center.appendChild(table)
// table.appendChild(thead)
// thead.appendChild(tr)

// tr.appendChild(th1)
// tr.appendChild(th2)
// tr.appendChild(th3)
// tr.appendChild(th4)
// table.appendChild(tbody)

register.addEventListener('click', function () {
    const userForm = document.forms["userform"]
    // const userNameElement = userForm.username
    // const ageElement = userForm.age
    // const emailElement = userForm.email
    // const phnoNameElement = userForm.phno

    let userEle = document.forms['userform']['username']
    let phoneEle = document.forms['userform']['phone']
    let ageEle = document.forms['userform']['age']
    let emailEle = document.forms['userform']['email']



    const username = userEle.value
    const age = ageEle.value
    const email = emailEle.value
    const phno = phoneEle.value
    console.log("username is", username)
    console.log("password is", age)

    if (userEle.value.trim().length == " " || userEle.value.trim().length < 3) {
        let nEle = document.getElementById("test1")
        nEle.style.display = "block"
        // flag = 1;
        // return flag
        u = false

    } else {
        let nEle = document.getElementById("test1")
        nEle.style.display = "none"

        u = true
    }

    if (ageEle.value.trim() < 1 || ageEle.value.trim() > 140) {

        let aEle = document.getElementById("test2")
        aEle.style.display = "block"
        // flag = 1;
        // return flag
        a = false

    } else {
        let aEle = document.getElementById("test2")
        aEle.style.display = "none"
        a = true

    }

    var emailID = emailEle.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");


    if (atpos < 1 || (dotpos - atpos < 2)) {
        let eEle = document.getElementById("test3")
        eEle.style.display = "block"
        e = false

    } else {
        let eEle = document.getElementById("test3")
        eEle.style.display = "none"
        e = true

    }

    if (phoneEle.value.trim().length !== 10) {
        let pEle = document.getElementById("test4")
        pEle.style.display = "block"
        // flag = 1;
        // return flag

        p = false

    } else {
        let pEle = document.getElementById("test4")
        pEle.style.display = "none";
        p = true

    }

    // let pUserName = document.getElementById("pusername")
    // only albhabets 
    // var uname = /^[A-Za-z]{3,14}$/
    // if (username.match(uname)) {
    //     pUserName.className = "removeStyle"
    //     bUserName= true;
    // }
    // else {
    //     pUserName.className = "addStyle"
    //     bUserName= false;
    // }

    // let pAge = document.getElementById("page")
    // var x = parseInt(age, 10) // its the value from the input box;
    // if (isNaN(x) || x < 1 || x > 150) {

    //     pAge.className = "addStyle"
    //     bAge= false;
    // }
    // else {
    //     pAge.className = "removeStyle"
    //     bAge= true
    // }

    // let pEmail = document.getElementById("pemail")
    // // only albhabets 
    // let uemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    // if (email.match(uemail)) {
    //     pEmail.className = "removeStyle"
    //     bEmail= true;
    // }
    // else {
    //     pEmail.className = "addStyle"
    //     bEmail= false;
    // }


    // let pPhno = document.getElementById("pphno")
    // // only albhabets 
    // let phoneno = /^\d{10}$/;
    // if (phno.match(phoneno)) {
    //     pPhno.className = "removeStyle"
    //     bPhno= true;
    // }
    // else {
    //     pPhno.className = "addStyle"
    //     bPhno= false;
    // }

    if (u == true && a == true && e == true && p == true) {
        var user = { username: username, age: age, email: email, phoneno: phno }

        if (localStorage.getItem("userdata")) {
            userdataArray = JSON.parse(localStorage.getItem("userdata"))
            userdataArray.push(user)
            localStorage.setItem("userdata", JSON.stringify(userdataArray))

        }
        else {
            localStorage.setItem("userdata", JSON.stringify([user]))
        }

        userForm.reset();
        userdataArray = JSON.parse(localStorage.getItem("userdata"))

        let div2 = document.getElementById("div2");
        div2.className="add"

        


            for (const key in userdataArray) {
                const { username, age, email, phoneno } = userdataArray[key]

                let newRow = regtable.insertRow(regtable.rows.length);
                let newCell1 = newRow.insertCell(0);
                let username1 = username
                let newText1 = document.createTextNode(username1);
                newCell1.appendChild(newText1);

                let newCell2 = newRow.insertCell(1);
                let age1 = age
                let newText2 = document.createTextNode(age1);
                newCell2.appendChild(newText2);

                let newCell3 = newRow.insertCell(2);
                let email1 = email
                let newText3 = document.createTextNode(email1);
                newCell3.appendChild(newText3);

                let newCell4 = newRow.insertCell(3);
                let phno = phoneno
                let newText4 = document.createTextNode(phno);
                newCell4.appendChild(newText4);



        // let tr1 = document.createElement("tr")
        // let td1 = document.createElement("td")
        // let td2 = document.createElement("td")
        // let td3 = document.createElement("td")
        // let td4 = document.createElement("td")

        // td1.textContent = username
        // td2.textContent = age
        // td3.textContent = email
        // td4.textContent = phoneno

        
        // tbody.appendChild(tr1)
        // tr1.appendChild(td1)
        // tr1.appendChild(td2)
        // tr1.appendChild(td3)
        // tr1.appendChild(td4)

            }
        }

    }
)


let clear = document.getElementById("clear")

clear.addEventListener('click', function () {
    // table.innerHTML = ""
    localStorage.clear();

})