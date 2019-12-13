async function getData() {

    console.log("getData() function started")
    try {
        const response = await fetch('https://onplaceholder.typicode.com/todos/1')
        const data = await response.json()
        console.log("Data ", data)
    } catch (err) {
        console.log("Error ", err)
    }
    console.log("getData() function ended")
}

getData()