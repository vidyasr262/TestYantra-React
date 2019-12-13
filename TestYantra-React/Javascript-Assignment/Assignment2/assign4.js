function circumference(radius) {
    var c;
    if (radius === 0) {
        return 0;
    } else {
        c = 2 * Math.PI * radius;
        return c;
    }
}
console.log("Circumference 1: ", circumference(3));


var circumference = function (radius) {
    var c;
    if (radius === 0) {
        return 0;
    } else {
        c = 2 * Math.PI * radius;
        return c;
    }
}
var cr = circumference(2);
console.log("Circumference 2: ", cr);



(function circumference(radius) {
    var c;
    if (radius === 0) {
        return 0;
    } else {
        c = 2 * Math.PI * radius;
        console.log("Circumference 3: ", c);
        return c;
    }
})(4);


var circumference = radius => {
    var c;
    if (radius === 0) {
        return 0;
    } else {
        c = 2 * Math.PI * radius;
        return c;
    }
}
var cr = circumference(2);
console.log("Circumference 4: ", cr);


// Area = Math.PI* r*r
// C = 2 * Math.PI * radius;