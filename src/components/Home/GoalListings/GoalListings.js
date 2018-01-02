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
        return axios.get('http://localhost:3003/api/read').then(res => {
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
                        <div className="rapper" >
                            <div className="titleText">{e.goal_name}</div>
                            <div className="dates">Goal Date <br/>{e.end_date}</div>
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

export default GoalListings
