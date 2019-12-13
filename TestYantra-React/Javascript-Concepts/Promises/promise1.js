console.log("JS stared")
const myPromise = new Promise(function(resolve, reject) {
    if (20 > 10) {
        const data = [100, 200, 300, 400];
        resolve(data)
    } else {
        reject('Filled to fetch the data')
    }
})

myPromise.then(function(data) {
    console.log("Data is ", data)

}).catch(function(error) {
    console.log("Error is ", error)
})
console.log('JS ended')