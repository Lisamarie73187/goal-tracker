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
        axios.get('http://localhost:3003/api/read').then(res => {
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
                    <Link style={noDecor}to={`/goal/${e.goals_id}`} key={e.goals_id}>
                        <div>
                        <div className="rapper">
                        <div className="titleText">{e.goal_name}</div>
                        <ProgressBar/>
                        <div className="dates"><div>Start Date: {e.start_date} Goal Date: {e.end_date}</div></div>
                        </div>
                        </div>
                    </Link>
                    )
                 })
                }
            </div>
        )
    }
}

const noDecor = {
    textDecoration: 'none'
}

export default GoalListings
