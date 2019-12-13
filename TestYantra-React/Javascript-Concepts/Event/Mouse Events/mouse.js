function addStyle(){
    let element = document.getElementById("add")
    element.className = "addStyle"
}

function removeStyle(){
    let ele = document.getElementById("add")
    // ele.className = ''

    ele.className = 'removeStyle'
}

const bElement = document.getElementById("one")
bElement.onclick = function(){
    alert("Hello")
}