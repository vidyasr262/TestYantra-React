// var fibonacci_series = function (n) {
//     if (n === 1) {
//         return [0, 1];
//     }
//     else {
//         var s = fibonacci_series(n - 1);
//         s.push(s[s.length - 1] + s[s.length - 2]);
//         return s;
//     }
// };
// console.log(fibonacci_series(3));


// function fibonacci_series(n) {
//     var fib = [0, 1];
// for(var i=fib.length; i<n; i++) {
//     fib[i] = fib[i-2] + fib[i-1];
//     console.log(fib[i]);
// }
// }
// console.log("fib 1 ", fibonacci_series(3));



function fibonacci_series(n) {
    var i;
    var fib = []; // Initialize array!

    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        console.log("Fib1 ", fib[i]);
    }
}
fibonacci_series(2);



var fibonacci_series = function (n) {
    var i;
    var fib = []; // Initialize array!

    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        console.log("Fib2 ", fib[i]);
    }
}
fibonacci_series(3);

(function fibonacci_series(n) {
    var i;
    var fib = []; // Initialize array!

    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        console.log("Fib3 ", fib[i]);
    }
})(4);


var fibonacci_series = n => {
    var i;
    var fib = []; // Initialize array!

    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        console.log("Fib4 ", fib[i]);
    }
}
fibonacci_series(5);