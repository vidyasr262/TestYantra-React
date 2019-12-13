function event1(y){
    document.getElementById("text1").value+=y;
}
function clear(){
    document.getElementById("text1").innerHTML = "";
}
function event2(){
    var x = document.getElementById("text1").value;
    document.getElementById("text1").value = eval(x);
    console.log(x)
   
}


