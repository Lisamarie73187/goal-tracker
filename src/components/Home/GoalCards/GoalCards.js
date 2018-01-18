import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './GoalCards.css';
import { connect } from 'react-redux';
import { getGoals } from '../../../ducks/reducer'
import ProgressBar from './ProgressBar';




class GoalListings extends Component {
    constructor(){
        super()
        this.state = {
            subtaskArray: [],
            percent: [],
            percentArray: []
        }
        this.getInformation = this.getInformation.bind(this)
        this.percentage = this.percentage.bind(this)
    }
   


    componentDidMount() {
        this.props.getGoals().then(() => {
            this.getInformation()
        })
    }

    getInformation(){
        console.log('get information')
        this.props.data.map((e) => {
            axios.get(`/api/getpercent/${e.goalsid}`).then( res => {
                this.setState ({
                    subtaskArray: [...this.state.subtaskArray, res.data]
                })
            })
        })
        setTimeout(() => {
            this.percentage()
        },2000)
    }

    percentage(){
        console.log('are you working?')
        var percentArray = []
        this.state.subtaskArray.map( (goal) => {
            var completed = 0
            console.log(goal.length)
            goal.map((subtask) => {
                console.log(subtask)
                if(subtask.completed){
                    completed++
                }
            })
            this.setState({
                percentArray: [...this.state.percentArray, (completed/goal.length) * 100]
            }) 
        })
    }
   
    render() {
        console.log(this.state.subtaskArray)
        return (
            <div className="why">
            {this.props.data.map((e)=>{
                 return (
                    <div key={e.goalsid}>
                        <div className="rapper" style={heighty0}>
                            <div className="titleText">{e.goalname}</div>
                            <div className="dates">Goal Date <br/>{e.enddate}</div>
                            {this.state.percentArray.map(p => {
                                return <ProgressBar percent={p}/>
                            })}
                            {/* <ProgressBar percent={}/> */}
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

function mapStateToProps(state) {
    return {
      data: state.data
    };
  };

const mapDispatchToProps = {
    getGoals: getGoals,
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(GoalListings);

