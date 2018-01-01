import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import './ProgressBar.css'


class ProgressBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <CircularProgressbar percentage={60} initialAnimation="true" />
            </div>
        )
    }
}


export default ProgressBar
