const t = document.createElement('table')

const head = document.createElement('tr')
const d = document.createElement('th')
d.textContent = "Name"

const data4 = document.createElement('th')
data4.textContent = "Age"

const data5 = document.createElement('th')
data5.textContent = "Address"

const data6 = document.createElement('th')
data6.textContent = "Date of birth"

head.appendChild(d)
head.appendChild(data4)
head.appendChild(data5)
head.appendChild(data6)
t.appendChild(head)

const row = document.createElement('tr')
// const data = document.createElement('td')
// data.textContent = "Name"
const data0 = document.createElement('td')
data0.textContent = "Vidya"

const data1 = document.createElement('td')
data1.textContent = "24"

const data2 = document.createElement('td')
data2.textContent = "Hassan"

const data3 = document.createElement('td')
data3.textContent = "04-04-1995"

row.appendChild(data0)
row.appendChild(data1)
row.appendChild(data2)
row.appendChild(data3)

t.appendChild(row)
document.body.appendChild(t)

t.className = "table, th, td";

head.className = "header";


//////////////////////////




// let ta = `<table><tr class="header"><th>Name</th><th>Age</th><th>Address</th><th>Date of birth</th></tr><tr><td>Vidya</td><td>24</td><td>Hassan</td><td>04-04-1995</td></tr></table>`
// let tt = document.getElementById("test2")
// tt.innerHTML = ta



