console.log(personName);
var personName = "Goutham";
console.log("Person name is ", personName);

hoist();
function hoist(){
    console.log(message)
    var message = "Hello"
    console.log(message)
}
