import React, { Component } from 'react'


class DisplayList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div style={layout}>
                This is the task lists
            </div>
        )
    }
}

const layout = {
    height: '100vh'
}

export default DisplayList
