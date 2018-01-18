import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import './ProgressBar.css'
// import { getSubTask } from '../../ducks/reducer'



class ProgressBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

  

    render() {
        return (
            <div>
                <CircularProgressbar percentage={this.props.percent} initialAnimation="true" />
            </div>
        )
    }
}



export default ProgressBar
