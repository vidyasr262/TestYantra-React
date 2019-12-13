fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function(response) {
        return response.json()
    })
    .then(function(json) {


        /////////

        sub.addEventListener('click', function() {

            let main = document.getElementById("ma")
            for (let i in json) {
                const { userId, id, title, completed } = json[i]
                let input = document.getElementById("in")

                let sub = document.getElementById("sub");
                console.log(userId);
                if (title == input.value) {

                    let col = document.createElement("div")
                    col.className = "col-3 my-3"

                    let three = document.createElement("div")
                    three.className = "card";

                    let one = document.createElement("div")
                    one.textContent = "ID: " + " " + userId;
                    one.className = "card-header"

                    let two = document.createElement("div")
                    two.innerHTML = "Title: " + " " + title;
                    two.className = "card-body"


                    console.log(userId);
                    three.append(one)
                    three.append(two);
                    col.append(three)
                    main.append(col)
                }
            }
        })



    })