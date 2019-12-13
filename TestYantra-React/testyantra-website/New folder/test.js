let details=document.getElementById("submit");
details.addEventListener("click",displayDetails);

let row=1;
    function displayDetails(){
        localStorage.setItem('name',document.getElementById("name").value)
        localStorage.setItem( 'password',document.getElementById("password").value)
        localStorage.setItem('phoneno',document.getElementById("phoneno").value)


        // let name=document.getElementById("name").value;
        // let password=document.getElementById("password").value;
        // let phoneno=document.getElementById("phoneno").value;

        let name= localStorage.getItem('name');
        let password=localStorage.getItem('password');
        let phoneno=localStorage.getItem('phoneno');
        if(!name || !password || !phoneno){
            alert("please fill all the details")
            return
        }

        let display=document.getElementById("display");

        let newRow=display.insertRow(row);

        let cell1=newRow.insertCell(0);
        let cell2=newRow.insertCell(1);
        let cell3=newRow.insertCell(2);

        cell1.innerHTML=name;
        cell2.innerHTML=password;
        cell3.innerHTML=phoneno;

        row++;
    }




// let a1=[]

// function myFunction(){
//     console.log("function called")
// let a=document.getElementById('item').value;
// let b=document.getElementById('item1').value;
// let c=document.getElementById('item2').value;
// console.log("a",a)
// a1[0]=a;
// a1[1]=b;
// a1[2]=c;
// console.log(a1)
// }
