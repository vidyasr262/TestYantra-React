// const f = document.createElement('form')

// const ip = document.createElement('input')
// const l = document.createElement('label')
// l.textContent = "Name: "
// const br = document.createElement('br')


// const ip1 = document.createElement('input')
// const l1 = document.createElement('label')
// l1.textContent = "Age: "
// const br1 = document.createElement('br')


// const ip2 = document.createElement('textarea')
// const l2 = document.createElement('label')
// l2.textContent = "Address: "
// const br2 = document.createElement('br')


// const ip3 = document.createElement('input')
// const l3 = document.createElement('label')
// l3.textContent = "Date of birth: "
// const br3 = document.createElement('br')



// const btn = document.createElement('button')
// btn.textContent = "Submit"

// f.appendChild(l)
// f.appendChild(ip)
// f.appendChild(br)

// f.appendChild(l1)
// f.appendChild(ip1)
// f.appendChild(br1)


// f.appendChild(l2)
// f.appendChild(ip2)
// f.appendChild(br2)


// f.appendChild(l3)
// f.appendChild(ip3)
// f.appendChild(br3)


// f.appendChild(btn)
// f.appendChild(br3)

// // head.appendChild(data5)
// // head.appendChild(data6)
// // t.appendChild(head)

// document.body.appendChild(f)
// console.log(f)

//  f.className = "form";
// let tag = document.getElementsByClassName("input");
// tag.className = "inner";



/////////////////







// Fetching HTML Elements in Variables by ID.
var x = document.getElementById("form_sample");
var createform = document.createElement('form'); // Create New Element Form
createform.setAttribute("action", ""); // Setting Action Attribute on Form
createform.setAttribute("method", "post"); // Setting Method Attribute on Form
x.appendChild(createform);

var heading = document.createElement('h2'); // Heading of Form
heading.innerHTML = "Contact Form ";
createform.appendChild(heading);

var line = document.createElement('hr'); // Giving Horizontal Row After Heading
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = "Name : "; // Set Field Labels
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "name");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); // Create Label for E-mail Field
emaillabel.innerHTML = "Age : ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); // Create Input Field for E-mail
emailelement.setAttribute("type", "number");
emailelement.setAttribute("name", "age");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var messagelabel = document.createElement('label'); // Append Textarea
messagelabel.innerHTML = "Address : ";
createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "address");
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var datelabel = document.createElement('label'); // Create Label for E-mail Field
datelabel.innerHTML = "Data of birth : ";
createform.appendChild(datelabel);

var dateelement = document.createElement('input'); // Create Input Field for E-mail
dateelement.setAttribute("type", "date");
dateelement.setAttribute("name", "date");
createform.appendChild(dateelement);

var datebreak = document.createElement('br');
createform.appendChild(datebreak);

var submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);