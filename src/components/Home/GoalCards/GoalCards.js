import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './GoalCards.css';
import ProgressBar from './ProgressBar';




class GoalListings extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            array: []
        }
        this.arr = []
    }
   


    componentDidMount() {
        return axios.get(`/api/goal/subtask`).then( res =>{
            // console.log(res.data)
            this.setState({
                data: res.data
            })
        }).then(() => {
           
        })
    }

    // getInformation(){
    //     this.props.data.map((e) => {
    //         return axios.get(`/api/getpercent/${e.goalsid}`).then( res => {
    //             this.setState ({
    //                 subtaskArray: [...this.state.subtaskArray, res.data]
    //             })
    //         })
    //     })
    //     setTimeout(() => {
    //         this.percentage()
    //     },2000)
    // }

    // percentage(){
    //     console.log('are you working?')
    //     return this.state.subtaskArray.map( (goal) => {
    //         var completed = 0
    //         goal.map((subtask) => {
    //             console.log(subtask)
    //             if(subtask.completed){
    //                 completed++
    //             }
    //         })
    //         this.setState({
    //             percentArray: [...this.state.percentArray, (completed/goal.length) * 100]
    //         }) 
    //     })
    // }
   
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

