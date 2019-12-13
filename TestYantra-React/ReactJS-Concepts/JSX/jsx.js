const element = <h1> Hello world </h1>
console.log(element);

const userName = "Dulquer"
const greet = <h1>Hello, {userName} </h1>

const items = ['Deodrant', 'Saree','Shoe']
// const list = <ul>
//                 <li>Deodrant</li>
//                 <li>Saree</li>
//                 <li>Shoe</li>
//             </ul>

const list = <ul>
                {
                    items.map((item,index) => {
                        return <li key={item+index}> { item } </li>
                    }

                    )
                }
            </ul>
ReactDOM.render(list, document.getElementById('react-container'))

// ReactDOM.render(greet, document.getElementById('react-container'))