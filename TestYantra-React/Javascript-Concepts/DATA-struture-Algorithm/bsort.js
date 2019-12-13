// function bubble_Sort(a) {
//     var swapp;
//     var n = a.length - 1;
//     var x = a;
//     do {
//         swapp = false;
//         for (var i = 0; i < n; i++) {
//             if (x[i] < x[i + 1]) {
//                 var temp = x[i];
//                 x[i] = x[i + 1];
//                 x[i + 1] = temp;
//                 swapp = true;
//             }
//         }
//         n--;
//     } while (swapp);
//     return x;
// }

function bubbleSort(items) {
    var length = items.length;
    //Number of passes
    for (var i = 0; i < length; i++) {
        //Notice that j < (length - i)
        for (var j = 0; j < (length - i - 1); j++) {
            //Compare the adjacent positions
            if (items[j] > items[j + 1]) {
                //Swap the numbers
                var tmp = items[j]; //Temporary variable to hold the current number
                items[j] = items[j + 1]; //Replace current number with adjacent number
                items[j + 1] = tmp; //Replace adjacent number with current number

            }

        }

    }
    return items
}

function countDuration1() {
    var d = new Date();
    var n = d.getSeconds();
    var m = n / 1000;
    console.log("Before execution ", m)
    var result = bubbleSort([12, 345, 4, 455, 23, 213]);
    console.log(result)
    var d1 = new Date();
    var n1 = d1.getSeconds();
    var m1 = n1 / 1000;
    console.log("after execution ", m1)
    var result = bubbleSort([12, 345, 4, 455, 23, 213]);
    console.log(result)



}
countDuration1()
    //console.log(bubbleSort([12, 345, 4, 455, 23, 213]));