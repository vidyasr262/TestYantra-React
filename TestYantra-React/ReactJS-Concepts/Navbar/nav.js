
class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            content: 'Heading'
        }
    }
    render(){
    return (
      <div>
          <Header />
          <Content />
          <Footer />
          </div>
    )
    }
}



class Header extends React.Component{
    render(){
    return <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#news">Login</a></li>
    <li><a href="#create">Create account</a></li>
  </ul>
  
    }
}

class Content extends React.Component{
    render(){
        return (
        <h1 className="text">Welcome React JS</h1>
        // <h3>{this.state.content}</h3>
        )
    }
}
class Footer extends React.Component{
    render(){
    return <footer><h3>This is footer</h3></footer>
        

    }
}

// ReactDOM.render(<div><Header /><Content /><Footer /></div>, document.getElementById('react-container'))
ReactDOM.render(<div><App /></div>, document.getElementById('react-container'))

