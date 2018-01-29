import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
// import ReactLoading from 'react-loading';
import { getGoals } from '../../../ducks/reducer'
import BarGraph from './BarGraph';
import BarGraphDates from './BarGraphDates';
import PieChart from './PieChart'


class Dashboard extends Component {
    constructor (){
        super()
        this.state = {
            numberOfSubTasks: 0,
            numberOfCompletedTasks: 0,
            taskResp: []

        }

        this.getSubtaskGoals = this.getSubtaskGoals.bind(this)
    }
    componentDidMount() {
        this.props.getGoals()
        this.getSubtaskGoals()
    }

    getSubtaskGoals(){
        axios.get(`/api/goal/subtask`).then( response => {
            var completedArr = []
            var subtaskArr = []
            response.data.forEach(e => {
                if(e.completed){
                    completedArr.push(e.completed)
                }
                if(e.subtaskname){
                    subtaskArr.push(e.subtaskname)
                }
                this.setState({
                    numberOfCompletedTasks: completedArr.length,
                    numberOfSubTasks: response.data.length,
                    taskResp: subtaskArr.length
                })
                })
            })
        }
    
    

    render() {
        return (
            <div>
                {this.props.data.length >= 1 ? 
                <div className="wrappers">
                    <div className="firstRow">
                            <div className="boxerOne">
                                <h1 className="textyText">Number of <br/> Goals </h1>
                                <div className="numberGoals">{this.props.data.length}</div>
                            </div>
                            <div className="boxerTwo">
                            {this.state.numberOfSubTasks ? 
                                <div>
                                    <h1 className="textyText">Number of <br/>Subtasks </h1>
                                    <div className="numberGoals">{this.state.taskResp}</div>
                                </div>
                                : <div>
                                <div className="textyText">Number of <br/> Tasks</div>
                                <div className="numberGoals">0</div>
                                </div>}
                            </div>
                            <div className="boxerThree">
                            {this.state.numberOfCompletedTasks ? 
                                <div>
                                    <h1 style={completedTasks} className="textyText">Number of Completed Subtasks </h1>
                                    <div className="numberGoals">{this.state.numberOfCompletedTasks}</div>
                                </div> 
                                : <div>
                                <div className="textyText">Number of Completed<br/> Subtasks</div>
                                <div className="numberGoals">0</div>
                                </div>}
                            </div>
                            <div className="pie">
                            {this.state.numberOfSubTasks ? 
                                <div>
                                    <div className="textyText">Number of Tasks per Goal</div>
                                    <div><PieChart/></div>
                                </div>
                                : null}
                                </div>
                            </div>
                            {this.state.numberOfSubTasks >= 2 ? 
                    <div className="secondRow">
                        <div className="barGraph"><BarGraphDates width={650} height={450}/></div>
                        <div className="barGraphOne"><BarGraphDates width={550} height={370}/></div>
                        <div className="barGraphTwo"><BarGraphDates width={470} height={280}/></div>
                        <div className="barGraphThree"><BarGraphDates width={400} height={250}/></div>
                            <div className="barGraph"><BarGraph width={600} height={370}/></div>
                            <div className="barGraphOne"><BarGraph width={500} height={270}/></div>
                            <div className="barGraphTwo"><BarGraph width={440} height={220}/></div>
                            <div className="barGraphThree"><BarGraph width={400} height={200}/></div>
                    </div>
                        : null}
                    </div>
                    : 
                    <div className="wrappers" style={wrappers}>
                        <Link to="/Create" className="noDecor">
                            <div style={create} className="createButton">Create your First Goal</div>
                        </Link>
                    </div>}
            </div>
        )
    }
}


const wrappers = {
    height: '100vh',
    margin: 'auto',
    textAlign: 'center',
    paddingTop: '200px'
}

const create = {
    color: 'white',
    textAlign: 'center',
    margin: 'auto',
    display: 'inline'
}

const completedTasks = {
    marginTop: '3px'
}

function mapStateToProps(state) {
    return {
        data: state.data,
    }
}

const mapDispatchToProps = {
    getGoals: getGoals
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
