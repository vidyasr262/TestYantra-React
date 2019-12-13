class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            test: false,
        }
    }

    home = () => {
        this.setState({
            name: 'hello',
            test: !this.state.test
        })
    }

    login = () => {
        this.setState({
            name: 'javascript',
            test: !this.state.test
        })
    }

    create = () => {
        this.setState({
            name: 'react',
            // isAdmin: !this.state.isAdmin
        })
    }

    render() {
        const home = <div>
            {/* <h1>{this.state.name}</h1> */}
            <img src="https://cdn.pixabay.com/photo/2019/12/02/03/26/snow-4666831__340.jpg" />

        </div>

        const login = <div>
            <h1>{this.state.name}</h1>
            <form>
                First name:<br />
                <input type="text" name="firstname" value="" />
                <br />
                Last name:<br />
                <input type="text" name="lastname" value="" />
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
        
        return (
            <div>
                <ul >
                    <li><a onClick={this.home}>Home</a></li>
                    <li><a onClick={this.login}>Login</a></li>
                    <li><a onClick={this.create}>Create account</a></li>
                </ul>
                {/* <Content /> */}
                {/* <h1>{this.state.name}</h1>
                    <h1>{this.state.subject}</h1>
                    <h1>{this.state.name}</h1> */}

                {this.state.test ? home : login}
            </div>
        )
    }
}





ReactDOM.render(<div><Header /></div>, document.getElementById('react-container'))
