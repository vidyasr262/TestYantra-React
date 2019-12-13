const form = document.querySelector('form');
  const ul = document.querySelector('ul');
//  const ul = document.querySelector('table');
const button = document.querySelector('button');
const input = document.getElementById('item');
const input1 = document.getElementById('item1');
// const input2 = document.getElementById('item2');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

var flag=0;
function check()
{
    user=loginform.username.value;
    pass=loginform.password.value;
    console.log("user : ",user, pass);

    if(user=="")
    {
        document.getElementById("error0").innerHTML="Enter UserID";
        flag=1;
    }
    
    if(pass=="")
    {
        document.getElementById("error1").innerHTML="Enter password";   
        flag=1;
    }
    
    return flag;
        
}


const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);

}

form.addEventListener('submit', function (e) {
    check();
    console.log("flag : ",flag)
    if(flag == 1){
        return;
    }
 e.preventDefault();

  itemsArray.push(input.value);
  itemsArray.push(input1.value);
//   itemsArray.push(input2.value);

  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";

  liMaker(input1.value);
  input1.value = "";

//   liMaker(input2.value);
//   input2.value = "";
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
