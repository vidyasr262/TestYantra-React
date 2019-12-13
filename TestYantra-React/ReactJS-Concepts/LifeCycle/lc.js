class Parent extends React.Component {
    constructor(props) {
        super(props)
        console.log('Parent Constructor')
        this.state = {
            name: 'lifecycle',
            show: true
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('parent getDerivedStateFromProps')
        return null
    }
    changeName = () => {
        this.setState({
            name: 'Updating phase'
        })
    }
    removeChild = () => {
        this.setState({
            show: false
        })
    }
    render() {
        console.log('Parent render')
        return (
            <div>
                <h1>Parent Component</h1>
                {/* <Child /> */}

                {this.state.show?<Child />:<h1>Child Component un mounted</h1>}
                <button onClick={this.changeName}>Change the name</button>
                <button onClick={this.removeChild}>Remove Child</button>
            </div>
        )
    }

    componentDidMount() {
        console.log('-----------Parent componentDidMount---------')
    }

    shouldComponentUpdate() {
        console.log('----------Parent shouldComponentUpdate-----------')
        return true
    }
    getSnapshotBeforeUpdate(preProps, preState) {
        console.log('------------Parent getSnapshotBeforeUpdate---------------------')
        console.log('Previos state ', preState)
        console.log('Currrent state ', this.state)

        return "scrolling position"
    }
    componentDidUpdate(preProps, preState, snapshot) {
        console.log('------------Parent componentDidUpdate------------------')
    }

    componentWillUnmount(){
        console.log('-----------Parent componentWillUnmount-----------')
    }
}


class Child extends React.Component {
constructor(props){
    super(props)
    console.log('-----------Child constructor------------')
}
static getDerivedStateFromProps(){
    console.log('Child getDerivedStateFromProps')
    return null
}
render() {
    console.log('Child render')
    return (
        <div>
            <h1>Child Component</h1>
          
        </div>
    )
}

componentDidMount() {
    console.log('-----------Child componentDidMount---------')
}

shouldComponentUpdate() {
    console.log('----------Child shouldComponentUpdate-----------')
    return true
}
getSnapshotBeforeUpdate() {
    console.log('------------Child getSnapshotBeforeUpdate---------------------')
    
}
componentDidUpdate() {
    console.log('------------Child componentDidUpdate------------------')
}

componentWillUnmount(){
    console.log('-----------Child componentWillunmount-----------')
}
}

ReactDOM.render(<div>
    <Parent />
    </div>, document.getElementById('react-container'))
