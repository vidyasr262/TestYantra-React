class Header extends React.Component {

    constructor(props) {
        super(props)
        console.log('props ', props)
    }
    render() {
        // return React.createElement('h1', null, 'This is header')
        return React.createElement('h1', null, this.props.headerValue)

    }
}

class Footer extends React.Component {
    constructor(props) {
        super(props)
        console.log('props ', props)
    }
    render() {
        return React.createElement('h1', null, 'This is Footer')
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props)
        console.log('props ', props)
    }
    render() {
        return React.createElement('p', null, 'This is content')

    }
}
const content = React.createElement(Content)
const footer = React.createElement(Footer)

const header = React.createElement(Header, { headerValue: 'Hello' })

const multiHeaders = React.createElement('div', null, header, content, content, footer)

ReactDOM.render(multiHeaders, document.getElementById('react-container'))