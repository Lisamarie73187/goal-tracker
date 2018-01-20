import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './GoalCards.css';
import ProgressBar from './ProgressBar';
import _ from 'lodash';




class GoalListings extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            array: [],
        }
       
    }
   


    componentDidMount() {
        this.filterArray()
    }

    filterArray(){
        return axios.get(`/api/goals`).then( res =>{
            this.setState({
                data: res.data
            })
        })
    }
   
    render() {
        return (
            <div className="why">
            {this.state.data.map((e, i) =>{
                 return (
                    <div key={i}>
                        <div>{this.array}</div>
                        <div className="rapper" style={heighty0}>
                            <div className="titleText">{e.goalname}</div>
                            <div className="dates">Goal Date <br/>{e.enddate}</div>
                            <ProgressBar goalsid={e.goalsid}/>
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


  
export default GoalListings;

