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
            array: []
        }
       
    }
   


    componentDidMount() {
        this.filterArray()
    }

    filterArray(){
        return axios.get(`/api/goal/subtask`).then( res =>{
            this.setState({
                data: res.data
            })
            var newArray = []
            newArray = _.uniqBy(res.data, 'goalsid')
            console.log(newArray)
            this.setState({
                array: newArray
            })      
        })
        
    }
   
    render() {
        return (
            <div className="why">
            {this.state.array.map((e, i) =>{
                 return (
                    <div key={i}>
                        <div>{this.array}</div>
                        <div className="rapper" style={heighty0}>
                            <div className="titleText">{e.goalname}</div>
                            <div className="dates">Goal Date <br/>{e.enddate}</div>
                            <ProgressBar percent="90"/>
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

