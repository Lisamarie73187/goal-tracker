import React, { Component } from 'react';
import './Dashboard.css';
import GoalListings from '../GoalListings/GoalListings';


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
                    Charts and graphs
                </div>
                <div>
                    <GoalListings/>
                </div>
            </div>
        )
    }
}


export default Dashboard
