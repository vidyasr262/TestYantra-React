//Named functions
function isPrime(num) {

    if (num === 2) {
      return true;
    }
    else if(num > 1){
      for (var i = 2;  i < num; i++) {
  
        if (num % i !== 0 ) {
          return true;
        }
  
        else if (num === i * i) {
          return false
        }
  
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  
  }
  console.log("Prime1 ", isPrime(121));


  var prime = function isPrime(num) {
    if (num === 2) {
      return true;
    }
    else if(num > 1){
      for (var i = 2;  i < num; i++) {
  
        if (num % i !== 0 ) {
          return true;
        }
  
        else if (num === i * i) {
          return false
        }
  
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  
  }
//   var p = prime(10);
//   console.log(p);
console.log("Prime2 ", isPrime(1));


  (function isPrime(num) {
    if (num === 2) {
      return true;
    }
    else if(num > 1){
      for (var i = 2;  i < num; i++) {
  
        if (num % i !== 0 ) {
          return true;
        }
  
        else if (num === i * i) {
          return false
        }
  
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  
  })(9);
  
  
  var prime = (num) => {
    if (num === 2) {
      return true;
    }
    else if(num > 1){
      for (var i = 2;  i < num; i++) {
  
        if (num % i !== 0 ) {
          return true;
        }
  
        else if (num === i * i) {
          return false
        }
  
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  
  }
  var p = prime(100);
  console.log("Prime4", p);