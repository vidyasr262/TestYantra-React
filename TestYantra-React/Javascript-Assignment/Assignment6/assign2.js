const oneImage = document.getElementById("img1");

oneImage.addEventListener('click', function () {
    const row1 = document.getElementById("row2");
    // console.log(row1)
    // row1.style.display = "block"

    if (row1.style.visibility === "hidden") {
        row1.style.visibility = "visible";
    } else {
        row1.style.visibility = "hidden";
    }
})

oneImage.addEventListener('mouseover', function () {
    const two = document.getElementById("img2");
    const three = document.getElementById("img3");
    two.src = 'images/img6.png';
    three.src = 'images/img7.jpg'

})


oneImage.addEventListener('mouseout', function () {
    const two = document.getElementById("img2");
    const three = document.getElementById("img3");
    two.src = 'images/img2.jpg';
    three.src = 'images/img3.png'

})


// function myImage(){
//     const row1 = document.getElementById("row2");
//         console.log(row1)
//   row1.style.display = "block"
// }