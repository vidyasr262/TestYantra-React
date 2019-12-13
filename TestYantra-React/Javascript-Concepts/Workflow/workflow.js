function first(callback) {
    setTimeout(function() {
            console.log("First func")
            callback()
        }, 1000)
        // callback()
}

function second() {
    console.log("Second func")
}
first(second);


// function first() {
//     setTimeout(function() {
//             console.log("First func")
//             // callback()
//         }, 1000)
//         // callback()
// }

// function second() {
//     console.log("Second func")
// }
// first();
// second();