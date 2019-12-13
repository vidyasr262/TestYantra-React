// const first = document.querySelector(".first");
// const iframe = document.querySelector("iframe");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   var html = first.textContent;
//   iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
// });


// first.addEventListener('keyup',()=>{
//   var html = first.textContent;
//   iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
// })

// // first.addEventListener("paste", function(e) {
// //         e.preventDefault();
// //         var text = e.clipboardData.getData("text/plain");
// //         document.execCommand("insertText", false, text);
// //     });

// //The default character set for HTML5 is UTF-8.


var val = document.getElementById('tt')
var val1 = document.getElementById('edit')

function event1(){
     var show = val.value
     val1.innerHTML = show
     console.log("hhhhh")
}