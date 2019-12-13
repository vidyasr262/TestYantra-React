class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loginp: false,
            homep: true,
            createp: false
        }
    }


handle = (value) => {
    if(value === 'home') {
    this.setState({
        loginp: false,
        homep: true,
        createp: false
    })
}
 if(value === 'log') {
    this.setState({
        loginp: true,
        homep: false,
        createp: false
    })
}
if(value === 'create') 
{
    this.setState({
        loginp: false,
        homep: false,
        createp: true
    })
}

}

    // home = () => {
    //     this.setState({
    //         loginp: false,
    //         homep: true,
    //         createp: false
    //     })
    // }

    // login = () => {
    //     this.setState({
    //         loginp: true,
    //         homep: false,
    //         createp: false
    //     })
    // }

    // create = () => {
    //     this.setState({
    //         loginp: false,
    //         homep: false,
    //         createp: true
    //     })
    // }

    render() {
        const home = <div>
            {/* <h1>{this.state.name}</h1> */}
            <img src="https://cdn.pixabay.com/photo/2019/12/02/03/26/snow-4666831__340.jpg" />

        </div>

        const login = <div>
            <h1 className="text-center">Login</h1>

            <form>

                <div className="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" className="form-control" placeholder="Enter email" id="email" />
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
                </div>
                <div className="form-group form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" /> Remember me
    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

        const create = <div>
            <h1 className="text-center">Create account</h1>
            <form>
                <div className="form-group">
                    <label for="username">Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" id="name" />
                </div>
                <div className="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" className="form-control" placeholder="Enter email" id="email" />
                </div>
                <div className="form-group">
                    <label for="phn">Phone number:</label>
                    <input type="number" className="form-control" placeholder="Enter phone number" id="phn" />
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
                </div>
                <div className="form-group form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" /> Remember me
    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>

        return (
            <div>
                {/* <ul >
                    <li><a onClick={this.home}>Home</a></li>
                    <li><a onClick={this.login}>Login</a></li>
                    <li><a onClick={this.create}>Create account</a></li>
                </ul> */}

                <ul >
                    <li><a onClick={this.handle.bind(this,'home')}>Home</a></li>
                    <li><a onClick={this.handle.bind(this,'log')}>Login</a></li>
                    <li><a onClick={this.handle.bind(this,'create')}>Create account</a></li>
            
                </ul>

                {this.state.homep ? home : ""}
                {this.state.loginp ? login : ""}
                {this.state.createp ? create : ""}
                

                <footer>
                   <h2> React Footer</h2>
                    </footer>
            </div>
        )
    }
}





ReactDOM.render(<div><Header /></div>, document.getElementById('react-container'))
