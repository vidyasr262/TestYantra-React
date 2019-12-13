const items = React.createElement('ul', { id: 'hot drinks' },
    React.createElement('li', { id: 'coffee' }, 'Coffee'),
    React.createElement('li', { id: 'tea' }, 'Tea'))

const mobiles = ['Honor', 'Oppo', 'Sumsung', 'Nokia', 'Redmi', 'Lenovo', 'Oppo']

const mobileList = React.createElement('ul', null,
    mobiles.map((mobile, index) => {
        return React.createElement('li', { key: `${mobile} ${index}` }, mobile)
    }))
console.log("Mobile list ", mobileList)
console.log('Items ', items)
const allItems = React.createElement('div', null, items, mobileList)
ReactDOM.render(allItems, document.getElementById('react-container'))

// console.log("Element ", element)
// ReactDOM.render(mobileList, document.getElementById('react-container'))
// ReactDOM.render(items, document.getElementById('react-container'))