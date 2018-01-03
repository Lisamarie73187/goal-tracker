import React, { Component } from 'react';
import './Dashboard.css';

import LineGraph from './LineGraph';
import BarGraph from './BarGraph';
import GoalLength from './GoalLength';




class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                <GoalLength/>
                <div className="wrapperTwo">
                <LineGraph/>
                <BarGraph/>
                </div>
                </div>
            </div>
        )
    }
}


export default Dashboard
