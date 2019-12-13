fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
        return response.json()
    })
    .then(function (json) {
        console.log(json)
        for (let i = 0; i < 10; i++) {
            // const element = ;
            console.log(json[i].title)
            console.log(json[0].title)
        }
        // document.getElementById("one").innerHTML = json[0].title;


        let body = document.getElementById("b")
        let ele = document.createElement("div")
        ele.textContent = json[0].title;
        ele.className = "card"
        console.log(ele)

        body.append(ele)


        /////////
        let input = document.getElementById("in")
        
   let sub = document.getElementById("sub");
   sub.addEventListener('click', function(){})
   

             if(json.userId === input.value)  {

                let main = document.getElementById("main")
                for (let i = 0; i< json.length; i++) {
        let col = document.createElement("div")
        col.className = "col-3 my-3"

        let three = document.createElement("div")
        three.className = "card";

        let one = document.createElement("div")
        one.textContent = "ID: " + " " + json[i].id;
        one.className = "card-header"

        let two = document.createElement("div")
        two.innerHTML = "Title: " + " " + json[i].title;
        two.className = "card-body"

       

        three.append(one)
        three.append(two);
        col.append(three)
        main.append(col)
        }
    }

        

    

    })
