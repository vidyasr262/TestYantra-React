const element = document.getElementById("one")
element.onkeydown = function(){
    console.log("triggered")
}

const second = document.getElementById("two")
const c = document.createElement('p');
second.addEventListener('keyup', function(){
    console.log(second.value)
    console.log(second.textContent)
    // console.log("key event")
    
    c.textContent = second.value;
    // let val  = second.value;
// let three = document.getElementById("three");
document.body.appendChild(c)
})


const sec = document.getElementById("five")
const s = document.getElementById("four")
sec.addEventListener('keyup', function(){
    
   s.textContent = sec.value;
document.body.appendChild(s)
})


