console.log("JS started ")

const myPromise = new Promise(function(resolve, reject){
    if(20 > 10){
        resolve("20 is greater than 10")
    } else {
        reject("20 is not greater than 10")
    }
})

myPromise.then(function(success){
    console.log('Success ',success)
})
.catch (function(error){
    console.log("Error ",error)
})

console.log("JS ended")