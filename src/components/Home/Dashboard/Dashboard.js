import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading';
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

        }

        this.getSubtaskGoals = this.getSubtaskGoals.bind(this)
    }
    componentDidMount() {
        this.props.getGoals()
        this.getSubtaskGoals()
    }

    getSubtaskGoals(){
        axios.get(`/api/goal/subtask`).then( response => {
            var arr = []
            response.data.forEach(e => {
                if(e.completed){
                    arr.push(e.completed)
                }
                this.setState({
                    numberOfCompletedTasks: arr.length,
                    numberOfSubTasks: response.data.length
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
                            {this.props.data ? 
                                <div>
                                    <h1 className="textyText">Number of <br/> Goals </h1>
                                    <div className="numberGoals">{this.props.data.length}</div>
                                </div> : <div><ReactLoading type="bubbles" color="white" height='67' width='35' /></div>}
                            </div>
                            <div className="boxerTwo">
                            {this.state.numberOfSubTasks >= 1 ? 
                                <div>
                                    <h1 className="textyText">Number of <br/>Tasks </h1>
                                    <div className="numberGoals">{this.state.numberOfSubTasks}</div>
                                </div>
                                : <div>
                                <div className="textyText">Number of <br/> Tasks</div>
                                <div className="numberGoals">0</div>
                                </div>}
                            </div>
                            <div className="boxerThree">
                            {this.state.numberOfCompletedTasks >= 1? 
                                <div>
                                    <h1 className="textyText">Number of <br/>Completed </h1>
                                    <div className="numberGoals">{this.state.numberOfCompletedTasks}</div>
                                </div> 
                                : <div>
                                <div className="textyText">Number of Completed<br/> Tasks</div>
                                <div className="numberGoals">0</div>
                                </div>}
                            </div>
                            <div className="pie">
                            {this.state.numberOfSubTasks >= 2 ? 
                                <div>
                                    <div className="textyText">Number of Tasks per Goal</div>
                                    <PieChart/>
                                </div>
                                : null}
                                </div>
                            </div>
                            {this.state.numberOfSubTasks >= 2 ? 
                    <div className="secondRow">
                        <div className="barGraph"><BarGraphDates/></div>
                            <div className="barGraph"><BarGraph/></div>
                    </div>
                        : null}
                </div>
                    : <div className="wrappers" style={wrappers}><Link to="/Create" className="noDecor"><div style={create} className="createButton">Create your First Goal</div></Link></div> }
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
    fontSize: '20pt',
    display: 'inline'
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
