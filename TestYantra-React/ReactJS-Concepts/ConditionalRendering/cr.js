class ConditionalRendering extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            adminName: 'chandru',
            userName: 'Giri',
            isAdmin: true,
            adminId: 200,
            userId: 30
        }
    }

    changeUserAdmin = () => {
        this.setState({
            isAdmin: !this.state.isAdmin
        })
    }

    navigateTOGoogle = (evevt) => {
        console.log("Event ", event)
        evevt.preventDefault();
    }

    render() {

        const admin = <div>
            <h1>{this.state.adminName}</h1>
            <h1>{this.state.adminId}</h1>
        </div>

        const user = <div>
            <h1>{this.state.userName}</h1>
            <h1>{this.state.userId}</h1>
        </div>
        // <h1>{this.state.isAdmin ? this.state.adminName : this.state.userName}
        // </h1>
        // <h1>{this.state.isAdmin ? this.state.adminId : this.state.userId}
        // </h1>

        return (

            <div>
                {this.state.isAdmin ? admin : user}
                <p>Home</p>
                <button onClick={this.changeUserAdmin}>click</button>
                <a href="https://www.google.com/" onClick={this.navigateTOGoogle}>Navigate to google</a>
            </div>
        )



        // return (
        //     <div>
        //         <h1>{this.state.isAdmin?this.state.adminName:this.state.userName}
        //         </h1>
        //         <h1>{this.state.isAdmin?this.state.adminId:this.state.userId}
        //         </h1>
        //         <p>Home</p>
        //     </div>
        // )





        // if (this.state.isAdmin) {
        //     return <h1>{this.state.adminName}</h1>

        // } else {
        //     return <h1>{this.state.userName}</h1>
        // }


        // return (
        //     this.state.isAdmin?<h1>{this.state.adminName}</h1>:<h1>{this.state.userName}</h1>
        // )

    }
}

ReactDOM.render(<ConditionalRendering />, document.getElementById('react-container'))
