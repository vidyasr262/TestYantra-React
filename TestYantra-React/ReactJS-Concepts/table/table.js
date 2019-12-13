// const items = React.createElement('ul', { id: 'hot drinks' },
//     React.createElement('li', { id: 'coffee' }, 'Coffee'),
//     React.createElement('li', { id: 'tea' }, 'Tea'))


// const table = React.createElement('table', null,
//     React.createElement('tr', null,
//         React.createElement('th', null, 'Name'), React.createElement('th', null, 'Phone')),
//     React.createElement('tr', null,
//         React.createElement('td', null, 'abc'), React.createElement('td', null, 677655443)))


// console.log('Items ', items)
// const allItems = React.createElement('div', null, items, table)
// ReactDOM.render(allItems, document.getElementById('react-container'))


const items = [{ Name: 'abc', Phone: 897554477 }, { Name: 'xyz', Phone: 8943214477 }]

const tableList = React.createElement('table', {
        className: 'tableBorder'
    },
    React.createElement('thead', { className: 'header' },
        React.createElement('tr', null,
            React.createElement('th', null, 'Name'),
            React.createElement('th', null, 'Phone'))),
    items.map((items, index) => {

        return React.createElement('tbody', { className: 'tbody' },
            React.createElement('tr', { id: `${items.Name}` },
                React.createElement('td', { className: 'tbody' }, items.Name),
                React.createElement('td', null, items.Phone)))
    })

)
console.log('Items ', tableList)
    // ReactDOM.render(tableList, document.getElementById('react-container'))


const drinks = ['coffee', 'tea']
const dList = React.createElement('ul', null,
    drinks.map((drink, index) => {
        return React.createElement('li', { key: `${drink} ${index}` }, drink)
    }))
console.log('dList ', dList)


const allItems = React.createElement('div', null, dList, tableList)
ReactDOM.render(allItems, document.getElementById('react-container'))