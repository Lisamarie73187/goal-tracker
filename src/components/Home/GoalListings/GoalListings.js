import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './goalListings.css';

import ProgressBar from './ProgressBar/ProgressBar';




class GoalListings extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        return axios.get('/api/goals').then(res => {
            console.log(res.data)
            this.setState ({
                data: res.data
            })
        })
    }
   
    render() {
        return (
            <div className="why">
            {this.state.data.map((e)=>{
                 return (
                    <div key={e.goalsid}>
                        <div className="rapper" style={heighty0}>
                            <div className="titleText">{e.goalname}</div>
                            <div className="dates">Goal Date <br/>{e.enddate}</div>
                            <ProgressBar percent="70"/>
                            <div style={layoutButton}>
                            <Link className="noDecor" to={`/goal/${e.goalsid}`}><span className="buttonGoal">Go to Goal</span></Link>
                            </div>
                        </div>
                    </div>
                    )
                 })
                }
            </div>
        )
    }
}

const layoutButton = {
    marginTop: '40px'
}

var heighty0 = {
    height: '425px',
}

export default GoalListings
