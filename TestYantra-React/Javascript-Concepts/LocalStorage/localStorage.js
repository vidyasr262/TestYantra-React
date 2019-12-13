localStorage.setItem('role','admin')
localStorage.setItem('email','abc@gmail.com')


localStorage.setItem('items', ["a","b"])

const it = localStorage.getItem('items[0]')
console.log("item ",it)

const email = localStorage.getItem('email')
console.log("email id ",email)


//localStorage.removeItem('role')

//localStorage.clear();


//Factorial
function factorial(n){

    if(n === 0 || n ===1){
        return 1
    }else {
        return factorial(n-1)*n
    }
    
}

console.log(factorial(3))