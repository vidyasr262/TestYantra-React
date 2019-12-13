// document.body.style.backgroundColor = "blue";


// let first = document.body;
document.body.style.backgroundColor = "blue";


let btn = document.getElementById("color")
btn.addEventListener('click', function() {
    document.body.style.backgroundColor = "red";
    btn.addEventListener('click', function() {
        document.body.style.backgroundColor = "green";

        btn.addEventListener('click', function() {
            document.body.style.backgroundColor = "yellow";
            btn.addEventListener('click', function() {
                document.body.style.backgroundColor = "blue";
                btn.addEventListener('click', function() {
                    document.body.style.backgroundColor = "orange";
                    btn.addEventListener('click', function() {
                        document.body.style.backgroundColor = "pink";
                    })
                })
            })
        })
    })

})









// const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
// const btn = document.querySelector('button');
// const bodyBcg = document.querySelector('body');
// const hex = document.querySelector('.hex');

// btn.addEventListener('click', getHex);

// function getHex() {
//     let hexColor = '#';

//     for (let i = 0; i < 6; i++) {
//         let random = Math.floor(Math.random() * hexColors.length);
//         hexColor += hexColors[random];

//         bodyBcg.style.backgroundColor = hexColor;

//     }
// }