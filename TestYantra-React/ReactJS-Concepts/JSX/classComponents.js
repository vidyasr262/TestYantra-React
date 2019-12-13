class Header extends React.Component{
    render(){
        return <h1>This is header</h1>

    }
}

class Content extends React.Component{
    render(){
        return <p>Welcome {this.props.userName}</p>


    }
}


class Footer extends React.Component{
    render(){
    return <h1>This is footer</h1>
        

    }
}

ReactDOM.render(<div><Header userName="Salman" /><Content /><Footer /></div>, document.getElementById('react-container'))
