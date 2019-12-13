const loginButton = document.getElementById("login")
loginButton.addEventListener('click', function(){
    const userForm = document.forms['userForm']
    const userNameElement = userForm.username
    const passwordElement = userForm.password
    
    const userName = userNameElement.value
    const passWord = passwordElement.value
    console.log("Username is ", userName)
    console.log("Password is ", passWord)

    if(userName.length > 6){
        console.log("User name valid")
    }else {
        console.log("Password is invalid")
    }
    if(passWord.trim().length > 6){
        console.log("Password valid")
    }
    else {
        console.log("Password is invalid")
    }
})