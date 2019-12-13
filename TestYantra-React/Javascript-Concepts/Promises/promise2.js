console.log("JS stared")
const myPromise = new Promise((resolve, reject) => {
    if (20 > 10) {
        const data = [100, 200, 300, 400];
        resolve(data)
    } else {
        reject('Filled to fetch the data')
    }
})

myPromise.then(data => {
    console.log("Data is ", data)
    const filteredData = data.filter(val => val > 200)
    return filteredData;
}).then(filterData => console.log("Filtered data is ", filterData))
    .catch(error => console.log("Error is ", error) )
console.log('JS ended') 