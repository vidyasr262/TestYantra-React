function Header(props) {
    console.log('props ', props)
        // props.headerName = "Hello" //should not change the parameter data
    return React.createElement('h1', null, props.headerName)
}

const header = React.createElement(Header, {
    headerName: 'This is header',
    id: 'header'
}, 'Header Component')


function Footer(props) {
    return React.createElement('h1', null, 'This is Footer')
}

function Content(props) {
    return React.createElement('p', null, 'This is content')
}
const content = React.createElement(Content)
const footer = React.createElement(Footer)



const multiHeaders = React.createElement('div', null, header, content, content, footer)
ReactDOM.render(multiHeaders, document.getElementById('react-container'))







// function Header({ headerName }) {          // By using destructuring only taking hederName property
//     console.log('props ', headerName)
//     return React.createElement('h1', null, headerName)
// }

// const header = React.createElement(Header, {
//     headerName: 'This is header',
//     id: 'header'
// }, 'Header Component')
// ReactDOM.render(header, document.getElementById('react-container'))