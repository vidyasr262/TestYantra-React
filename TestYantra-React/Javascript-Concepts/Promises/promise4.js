const myPromise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("myPromise1 executed")
    },1000)
})

const myPromise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("myPromise2 executed")
    },1000)
})

Promise.race([myPromise1, myPromise2])
.then(function(response){
    console.log("Response ", response)
}).catch(function(error){
    console.log("error ",error)
})