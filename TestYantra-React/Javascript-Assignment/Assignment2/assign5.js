function total(arr) {
   if (!Array.isArray(arr)) return;
   let total = 0;
   for (let i = 0; i < arr.length; i++) {
      total += arr[i];
   }
   return total;
}
console.log("Array1: ", total([1, 2, 3]));



var total = function (arr) {
   if (!Array.isArray(arr)) return;
   let total = 0;
   for (let i = 0; i < arr.length; i++) {
      total += arr[i];
   }
   return total;
}
console.log("Array2: ", total([1, 3, 3]));



(function total(arr) {
   if (!Array.isArray(arr)) return;
   let total = 0;
   for (let i = 0; i < arr.length; i++) {
      total += arr[i];
   }
   console.log("Array3: ", total);

   return total;
})([1, 1, 1]);




var total = arr => {
   if (!Array.isArray(arr)) return;
   let total = 0;
   for (let i = 0; i < arr.length; i++) {
      total += arr[i];
   }
   return total;
}
console.log("Array4: ", total([1, 3, 3]));