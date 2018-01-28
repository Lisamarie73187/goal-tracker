import React, { Component } from 'react'
// import Nav from '../../Header/Nav';


class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div style={layoutBox}>
                <div>
                © copyright 2018 Lisa Herzberg
                </div>
            </div>
        )
    }
}

const layoutBox = {
    padding: '20px',
    backgroundColor: '#3f3e54',
    color: 'white'
}

export default Footer
