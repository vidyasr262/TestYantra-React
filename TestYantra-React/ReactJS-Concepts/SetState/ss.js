class Welcome extends React.Component {

    state = {
        name: 'Nidhin',
        show: false
    }

    constructor(props) {
        super(props)
        console.log(this)
        console.log('Inside constructor ',this)
    }
    
    // Best way of writing methods
    handleClick = ()=> {
        console.log('Inside handle click ',this)
        console.log('Inside arrow functions ', this.state.name)
        // Never ever mutate state directly (one way data binding)
       // this.state.name = 'Shibu'

       this.setState ({
           name: 'Shibu',
           
       })
    }
    render() {
        console.log('Inside render ',this)
        return (
       
            
            <div>
                <h1>Hello, {this.state.name}</h1>
                
                <button onClick={this.handleClick}>Click here to change Name</button>

            </div>
        )
    }

}
 ReactDOM.render(<Welcome />, document.getElementById('react-container'))