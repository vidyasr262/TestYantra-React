function Header(props){
    return <h1>This is header</h1>
}

function Content (props){
return <p>Welcome {props.userName}</p>
}

function Footer (props){
    return <h1>This is footer</h1>
    }

ReactDOM.render(<div><Header userName="Salman" /><Content /><Footer /></div>, document.getElementById('react-container'))

