import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import LineGraph from './LineGraph';
import BarGraph from './BarGraph';






class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        return axios.get('/api/read').then(res => {
            console.log(res.data)
            this.setState ({
                data: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <div className="wrappers">
                    <div className="firstRow">
                        <div className="boxer"><h1 className="textyText">Number of Goals </h1>
                        <div className="numberGoals">{this.state.data.length}</div></div>
                        <div className="boxer"><LineGraph/></div>
                    </div>
                    <div className="secondRow">
                        <div><BarGraph/></div>
                        <div><BarGraph/></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Dashboard
