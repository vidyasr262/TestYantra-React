let sub = document.getElementById("r");

sub.addEventListener('click', function() {

    let inp = document.getElementById("s").value
    let url = 'https://jsonplaceholder.typicode.com/todos/'
    let keys = url.concat(inp)

    fetch(keys)
        .then(function(response) {

            return response.json()
        })
        .then(function(json) {

            // let main = document.getElementById("ma")
            console.log(json)
            const { userId, id, title, completed } = json

            console.log(userId);
            console.log(id);
            console.log(title);

            //if (userId == input.value) {

            /* let col = document.createElement("div")
            col.className = "col-3 my-3"

            let three = document.createElement("div")
            three.className = "card";

            let one = document.createElement("div")
            one.textContent = "ID:  " + userId;
            one.className = "card-header"

            let two = document.createElement("div")
            two.textContent = "Title: " + title;
            two.className = "card-body"

            console.log(userId);
            three.append(one)
            three.append(two);
            col.append(three)
            main.append(col)
 */
        })



})